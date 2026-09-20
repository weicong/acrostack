import type { VoloAbpIdentityIdentityRoleDto } from "@/api/models/volo/abp/identity/IdentityRoleDto";

/** List/form item as returned by role endpoints. */
export type RoleItem = VoloAbpIdentityIdentityRoleDto;

/**
 * Form-level role shape. The list DTO already exposes `concurrencyStamp`,
 * which is needed by the update endpoint, so no extra fetch is required
 * (unlike {@link UserFormUser}).
 */
export type RoleFormRole = Pick<
  VoloAbpIdentityIdentityRoleDto,
  "id" | "name" | "isDefault" | "isPublic" | "isStatic" | "concurrencyStamp"
>;

/** Convert list DTO to form-ready shape. */
export function toFormRole(dto: RoleItem): RoleFormRole {
  return {
    id: dto.id,
    name: dto.name,
    isDefault: dto.isDefault,
    isPublic: dto.isPublic,
    isStatic: dto.isStatic,
    concurrencyStamp: dto.concurrencyStamp,
  };
}
