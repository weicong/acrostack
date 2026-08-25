import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";
import type { VoloAbpIdentityIdentityUserDto } from "@/api/models/volo/abp/identity/IdentityUserDto";

/** List item as returned by the user list endpoint. Feature-local alias so
 * pages don't depend on the generated (Kubb) type name directly. */
export type UserListItem = AcroStackAppUsersAppUserDto;

/**
 * Form-level user shape. Includes `concurrencyStamp` and `lockoutEnabled`
 * (needed by the update endpoint) which the list DTO does not expose —
 * fetch them via {@link useUserGet} before opening the edit dialog.
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

/** Convert the lightweight list DTO (no concurrencyStamp / lockoutEnabled). */
export function toFormUser(dto: AcroStackAppUsersAppUserDto): UserFormUser {
  return {
    id: dto.id,
    userName: dto.userName,
    name: dto.name,
    surname: dto.surname,
    email: dto.email,
    phoneNumber: dto.phoneNumber,
    isActive: dto.isActive,
    lockoutEnabled: undefined,
    concurrencyStamp: undefined,
  };
}

/** Convert the full IdentityUserDto returned by `GET /api/identity/users/{id}`. */
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
