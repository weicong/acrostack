import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchAppConfig, isPolicyGranted } from './permissions'

const mockFetchConfig = vi.fn()
const mockGetSections = vi.fn()

vi.mock('@volo/abp-react-app-config', () => ({
  createAbpReactAppConfig: vi.fn(() => ({
    fetchConfig: (...args: unknown[]) => mockFetchConfig(...args),
    getSections: () => mockGetSections(),
    getSnapshot: vi.fn().mockReturnValue(null),
    usePolicies: vi.fn(),
    useSnapshot: vi.fn().mockReturnValue(null),
    clear: vi.fn(),
  })),
}))

vi.mock('@/lib/runtimeConfig', () => ({
  getApiUrl: vi.fn(() => 'http://api.test'),
}))

describe('fetchAppConfig', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    sessionStorage.clear()
    mockFetchConfig.mockResolvedValue(undefined)
  })

  it('calls appConfig.fetchConfig with the provided token', async () => {
    await fetchAppConfig('token-123')
    expect(mockFetchConfig).toHaveBeenCalledWith('token-123', expect.objectContaining({}))
  })

  it('calls appConfig.fetchConfig with null token', async () => {
    await fetchAppConfig(null)
    expect(mockFetchConfig).toHaveBeenCalledWith(null, expect.objectContaining({}))
  })

  it('passes tenant header when tenant id is in sessionStorage', async () => {
    sessionStorage.setItem('abp_tenant_id', 'tenant-42')
    await fetchAppConfig('token-123')
    expect(mockFetchConfig).toHaveBeenCalledWith(
      'token-123',
      expect.objectContaining({
        headers: expect.objectContaining({ __tenant: 'tenant-42' }),
      })
    )
  })

  it('omits tenant header when no tenant id in sessionStorage', async () => {
    await fetchAppConfig('token-123')
    const call = mockFetchConfig.mock.calls[0]
    expect(call[1].headers).not.toHaveProperty('__tenant')
  })
})

describe('isPolicyGranted', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns true for granted policy', () => {
    mockGetSections.mockReturnValue({ auth: { grantedPolicies: { 'Test.Policy': true } } })
    expect(isPolicyGranted('Test.Policy')).toBe(true)
  })

  it('returns false for non-granted policy', () => {
    mockGetSections.mockReturnValue({ auth: { grantedPolicies: { 'Test.Policy': false } } })
    expect(isPolicyGranted('Test.Policy')).toBe(false)
  })

  it('returns false for unknown policy', () => {
    mockGetSections.mockReturnValue({ auth: { grantedPolicies: {} } })
    expect(isPolicyGranted('Unknown')).toBe(false)
  })

  it('falls back to auth.policies when grantedPolicies is missing', () => {
    mockGetSections.mockReturnValue({ auth: { policies: { 'MyPolicy': true } } })
    expect(isPolicyGranted('MyPolicy')).toBe(true)
  })

  it('returns false when auth section is missing', () => {
    mockGetSections.mockReturnValue({})
    expect(isPolicyGranted('Any.Policy')).toBe(false)
  })

  it('evaluates OR (||) compound policy', () => {
    mockGetSections.mockReturnValue({
      auth: { grantedPolicies: { 'Policy.A': true, 'Policy.B': false } },
    })
    expect(isPolicyGranted('Policy.A || Policy.B')).toBe(true)
    expect(isPolicyGranted('Policy.B || Policy.X')).toBe(false)
  })

  it('evaluates AND (&&) compound policy', () => {
    mockGetSections.mockReturnValue({
      auth: {
        grantedPolicies: { 'Policy.A': true, 'Policy.B': false, 'Policy.C': true },
      },
    })
    expect(isPolicyGranted('Policy.A && Policy.C')).toBe(true)
    expect(isPolicyGranted('Policy.A && Policy.B')).toBe(false)
  })
})
