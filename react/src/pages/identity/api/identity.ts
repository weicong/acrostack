import { axiosInstance } from "@kubb/plugin-client/clients/axios";

export interface IdentityClaimDto {
  claimType: string;
  claimValue: string;
}

export function getRoleClaims(roleId: string) {
  return axiosInstance
    .get<IdentityClaimDto[]>(`/identity/roles/${roleId}/claims`)
    .then((r) => r.data);
}

export function updateRoleClaims(roleId: string, claims: IdentityClaimDto[]) {
  return axiosInstance.put(`/identity/roles/${roleId}/claims`, claims);
}

export function moveAllUsersFromRole(roleId: string, targetRoleId?: string) {
  return axiosInstance.put(`/identity/roles/${roleId}/move-all-users`, null, {
    params: targetRoleId ? { roleId: targetRoleId } : undefined,
  });
}

export function getUserClaims(userId: string) {
  return axiosInstance
    .get<IdentityClaimDto[]>(`/identity/users/${userId}/claims`)
    .then((r) => r.data);
}

export function updateUserClaims(userId: string, claims: IdentityClaimDto[]) {
  return axiosInstance.put(`/identity/users/${userId}/claims`, claims);
}

export function lockUser(userId: string, lockoutEnd: string) {
  return axiosInstance.put(`/identity/users/${userId}/lock/${lockoutEnd}`);
}

export function unlockUser(userId: string) {
  return axiosInstance.put(`/identity/users/${userId}/unlock`);
}

export function setUserPassword(userId: string, password: string) {
  return axiosInstance.put(`/identity/users/${userId}/change-password`, { password });
}

export function getUserTwoFactorEnabled(userId: string) {
  return axiosInstance
    .get<boolean>(`/identity/users/${userId}/two-factor-enabled`)
    .then((r) => r.data);
}

export function setUserTwoFactorEnabled(userId: string, enabled: boolean) {
  return axiosInstance.put(`/identity/users/${userId}/two-factor/${enabled}`);
}
