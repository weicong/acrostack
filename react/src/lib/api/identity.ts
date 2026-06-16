/**
 * Identity module API - roles, users, claim-types.
 * ABP REST endpoints; use generate-proxy for full typing.
 */
import { api } from "./axios";

export interface PagedResultDto<T> {
  items: T[];
  totalCount: number;
}

export interface PagedAndSortedResultRequestDto {
  maxResultCount?: number;
  skipCount?: number;
  sorting?: string;
  filter?: string;
}

export interface IdentityRoleDto {
  id: string;
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
  isStatic?: boolean;
  concurrencyStamp?: string;
}

export interface IdentityUserDto {
  id: string;
  userName: string;
  email?: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  isActive?: boolean;
  isLockedOut?: boolean;
  lockoutEnabled?: boolean;
  lockoutEnd?: string;
  emailConfirmed?: boolean;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  creationTime?: string;
  lastModificationTime?: string;
  concurrencyStamp?: string;
  extraProperties?: Record<string, unknown>;
}

export interface CreateIdentityRoleDto {
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
}

export interface UpdateIdentityRoleDto extends CreateIdentityRoleDto {
  concurrencyStamp?: string;
}

export interface UpdateIdentityUserDto {
  userName?: string;
  email?: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[];
  concurrencyStamp?: string;
}

export interface IdentityClaimTypeDto {
  id: string;
  name: string;
  required?: boolean;
  isStatic?: boolean;
  valueType?: string;
  regex?: string;
  regexDescription?: string;
  description?: string;
  concurrencyStamp?: string;
}

export interface CreateIdentityClaimTypeDto {
  name: string;
  required?: boolean;
  isStatic?: boolean;
  valueType?: string;
  regex?: string;
  regexDescription?: string;
  description?: string;
}

export interface UpdateIdentityClaimTypeDto extends CreateIdentityClaimTypeDto {
  concurrencyStamp?: string;
}

export interface IdentityClaimDto {
  claimType: string;
  claimValue: string;
}

export interface UserLookupSearchDto {
  filter?: string;
  maxResultCount?: number;
  skipCount?: number;
}

export interface GetIdentityUsersInput extends PagedAndSortedResultRequestDto {
  filter?: string;
  roleId?: string;
  organizationUnitId?: string;
  userName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  name?: string;
  surname?: string;
  isLockedOut?: boolean;
  notActive?: boolean;
  emailConfirmed?: boolean;
  isExternal?: boolean;
  maxCreationTime?: string;
  minCreationTime?: string;
  maxModificationTime?: string;
  minModificationTime?: string;
}

// Roles
export function getRoles(params?: PagedAndSortedResultRequestDto) {
  return api
    .get<PagedResultDto<IdentityRoleDto>>("/identity/roles", { params })
    .then((r) => r.data);
}

export function getRole(id: string) {
  return api.get<IdentityRoleDto>(`/identity/roles/${id}`).then((r) => r.data);
}

export function createRole(body: CreateIdentityRoleDto) {
  return api.post<IdentityRoleDto>("/identity/roles", body).then((r) => r.data);
}

export function updateRole(id: string, body: UpdateIdentityRoleDto) {
  return api.put<IdentityRoleDto>(`/identity/roles/${id}`, body).then((r) => r.data);
}

export function deleteRole(id: string) {
  return api.delete(`/identity/roles/${id}`);
}

export function getRoleClaims(roleId: string) {
  return api.get<IdentityClaimDto[]>(`/identity/roles/${roleId}/claims`).then((r) => r.data);
}

export function updateRoleClaims(roleId: string, claims: IdentityClaimDto[]) {
  return api.put(`/identity/roles/${roleId}/claims`, claims);
}

export function moveAllUsersFromRole(roleId: string, targetRoleId?: string) {
  return api.put(`/identity/roles/${roleId}/move-all-users`, null, {
    params: targetRoleId ? { roleId: targetRoleId } : undefined,
  });
}

// Users
export function getUsers(params?: GetIdentityUsersInput) {
  return api
    .get<PagedResultDto<IdentityUserDto>>("/identity/users", { params })
    .then((r) => r.data);
}

export function getUser(id: string) {
  return api.get<IdentityUserDto>(`/identity/users/${id}`).then((r) => r.data);
}

export function updateUser(id: string, body: UpdateIdentityUserDto) {
  return api.put<IdentityUserDto>(`/identity/users/${id}`, body).then((r) => r.data);
}

export function deleteUser(id: string) {
  return api.delete(`/identity/users/${id}`);
}

export function getUserRoles(userId: string) {
  return api
    .get<{ items?: IdentityRoleDto[] }>(`/identity/users/${userId}/roles`)
    .then((r) => r.data?.items ?? r.data ?? []);
}

export function setUserRoles(userId: string, roleNames: string[]) {
  return api.put(`/identity/users/${userId}/roles`, { roleNames });
}

export function getUserClaims(userId: string) {
  return api.get<IdentityClaimDto[]>(`/identity/users/${userId}/claims`).then((r) => r.data);
}

export function updateUserClaims(userId: string, claims: IdentityClaimDto[]) {
  return api.put(`/identity/users/${userId}/claims`, claims);
}

export function lockUser(userId: string, lockoutEnd: string) {
  return api.put(`/identity/users/${userId}/lock/${lockoutEnd}`);
}

export function unlockUser(userId: string) {
  return api.put(`/identity/users/${userId}/unlock`);
}

export function setUserPassword(userId: string, password: string) {
  return api.put(`/identity/users/${userId}/change-password`, { password });
}

export function getUserTwoFactorEnabled(userId: string) {
  return api.get<boolean>(`/identity/users/${userId}/two-factor-enabled`).then((r) => r.data);
}

export function setUserTwoFactorEnabled(userId: string, enabled: boolean) {
  return api.put(`/identity/users/${userId}/two-factor/${enabled}`);
}

// Claim Types
export function getClaimTypes(params?: PagedAndSortedResultRequestDto) {
  return api
    .get<PagedResultDto<IdentityClaimTypeDto>>("/identity/claim-types", { params })
    .then((r) => r.data);
}

export function getClaimType(id: string) {
  return api.get<IdentityClaimTypeDto>(`/identity/claim-types/${id}`).then((r) => r.data);
}

export function createClaimType(body: CreateIdentityClaimTypeDto) {
  return api.post<IdentityClaimTypeDto>("/identity/claim-types", body).then((r) => r.data);
}

export function updateClaimType(id: string, body: UpdateIdentityClaimTypeDto) {
  return api.put<IdentityClaimTypeDto>(`/identity/claim-types/${id}`, body).then((r) => r.data);
}

export function deleteClaimType(id: string) {
  return api.delete(`/identity/claim-types/${id}`);
}
