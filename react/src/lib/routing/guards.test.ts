import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPermissionGuard, authGuard, type GuardContext } from './guards'

const mockGetUser = vi.fn()
const mockSigninRedirect = vi.fn()

vi.mock('@/lib/auth/userManager', () => ({
  userManager: {
    getUser: (...args: unknown[]) => mockGetUser(...args),
    signinRedirect: (...args: unknown[]) => mockSigninRedirect(...args),
  },
}))

const mockFetchAppConfig = vi.fn()
const mockIsPolicyGranted = vi.fn()
const mockGetSnapshot = vi.fn()

vi.mock('@/lib/auth/permissions', () => ({
  appConfig: {
    getSnapshot: () => mockGetSnapshot(),
  },
  fetchAppConfig: (...args: unknown[]) => mockFetchAppConfig(...args),
  isPolicyGranted: (...args: unknown[]) => mockIsPolicyGranted(...args),
}))

vi.mock('@tanstack/react-router', () => ({
  redirect: (opts: { to: string }) => {
    const err = new Error('REDIRECT')
    ;(err as Error & { to: string }).to = opts.to
    throw err
  },
}))

const CONTEXT: GuardContext = { location: { href: '/dashboard' } }

describe('guards', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockGetSnapshot.mockReturnValue({ initialized: true, loading: false })
  })

  describe('authGuard', () => {
    it('allows access when user is authenticated and not expired', async () => {
      mockGetUser.mockResolvedValue({ expired: false })
      await expect(authGuard(CONTEXT)).resolves.toBeUndefined()
    })

    it('redirects to login when user is null', async () => {
      mockGetUser.mockResolvedValue(null)
      mockSigninRedirect.mockResolvedValue(undefined)

      await expect(authGuard(CONTEXT)).rejects.toThrow('Redirecting to login')
      expect(mockSigninRedirect).toHaveBeenCalledWith({
        state: { returnUrl: '/dashboard' },
      })
    })

    it('redirects to login when user is expired', async () => {
      mockGetUser.mockResolvedValue({ expired: true })
      mockSigninRedirect.mockResolvedValue(undefined)

      await expect(authGuard(CONTEXT)).rejects.toThrow('Redirecting to login')
    })
  })

  describe('createPermissionGuard', () => {
    it('returns a function', () => {
      const guard = createPermissionGuard('Test.Permission')
      expect(typeof guard).toBe('function')
    })

    it('allows access when policy is granted', async () => {
      mockGetUser.mockResolvedValue({ expired: false })
      mockIsPolicyGranted.mockReturnValue(true)

      const guard = createPermissionGuard('Test.Permission')
      await expect(guard(CONTEXT)).resolves.toBeUndefined()
    })

    it('redirects to /403 when policy is not granted', async () => {
      mockGetUser.mockResolvedValue({ expired: false })
      mockIsPolicyGranted.mockReturnValue(false)

      const guard = createPermissionGuard('Test.Permission')

      try {
        await guard(CONTEXT)
        expect.fail('Should have thrown')
      } catch (err: unknown) {
        expect((err as Error & { to: string }).to).toBe('/403')
      }
    })

    it('checks the correct policy', async () => {
      mockGetUser.mockResolvedValue({ expired: false })
      mockIsPolicyGranted.mockReturnValue(true)

      const guard = createPermissionGuard('AbpIdentity.Users')
      await guard(CONTEXT)

      expect(mockIsPolicyGranted).toHaveBeenCalledWith('AbpIdentity.Users')
    })

    it('fetches app config when snapshot is not initialized and not loading', async () => {
      mockGetUser.mockResolvedValue({ expired: false, access_token: 'token-abc' })
      mockGetSnapshot.mockReturnValue({ initialized: false, loading: false })
      mockFetchAppConfig.mockResolvedValue(undefined)
      mockIsPolicyGranted.mockReturnValue(true)

      const guard = createPermissionGuard('Some.Permission')
      await guard(CONTEXT)

      expect(mockFetchAppConfig).toHaveBeenCalledWith('token-abc')
    })

    it('skips fetching app config when snapshot is already initialized', async () => {
      mockGetUser.mockResolvedValue({ expired: false, access_token: 'token-abc' })
      mockGetSnapshot.mockReturnValue({ initialized: true, loading: false })
      mockIsPolicyGranted.mockReturnValue(true)

      const guard = createPermissionGuard('Some.Permission')
      await guard(CONTEXT)

      expect(mockFetchAppConfig).not.toHaveBeenCalled()
    })
  })
})
