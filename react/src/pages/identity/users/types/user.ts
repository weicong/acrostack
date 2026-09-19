import type { VoloAbpIdentityIdentityUserDto } from "@/api/models/volo/abp/identity/IdentityUserDto";

/** List item as returned by `GET /api/identity/users` (ABP Identity, open source).
 * Feature-local alias so pages don't depend on the generated (Kubb) type name directly. */
export type UserListItem = VoloAbpIdentityIdentityUserDto;

/**
 * Form-level user shape. Includes `concurrencyStamp` and `lockoutEnabled`
 * (needed by the update endpoint), which the list DTO also exposes — but the
 * edit dialog still re-fetches the single user via {@link useUserGet} so the
 * form always works on the freshest row.
 */
export type UserFormUser = Pick<
  VoloAbpIdentityIdentityUserDto,
  | "id"
  | "userName"
  | "name"
  | "surname"
  | "email"
  | "phoneNumber"
  | "isActive"
  | "lockoutEnabled"
  | "concurrencyStamp"
>;

/** Convert an `IdentityUserDto` (list row or single fetch) into the form shape. */
export function toFormUserFromIdentity(dto: VoloAbpIdentityIdentityUserDto): UserFormUser {
  return {
    id: dto.id,
    userName: dto.userName,
    name: dto.name,
    surname: dto.surname,
    email: dto.email,
    phoneNumber: dto.phoneNumber,
    isActive: dto.isActive,
    lockoutEnabled: dto.lockoutEnabled,
    concurrencyStamp: dto.concurrencyStamp,
  };
}
