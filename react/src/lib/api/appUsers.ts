/**
 * AppUser API - read-only user listing backed by the AppUser entity.
 * Uses /api/app/app-users endpoint exposed by AppUserAppService.
 */
import { api } from './axios'
import type { PagedResultDto } from './identity'

export interface AppUserDto {
  id: string
  userName: string
  email?: string
  name?: string
  surname?: string
  phoneNumber?: string
  isActive?: boolean
  creationTime?: string
}

export interface GetAppUsersInput {
  maxResultCount?: number
  skipCount?: number
  sorting?: string
  filter?: string
}

export function getAppUsers(params?: GetAppUsersInput) {
  return api.get<PagedResultDto<AppUserDto>>('/app/app-user', { params }).then((r) => r.data)
}
