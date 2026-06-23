import type { AcroStackAppUsersAppUserDto } from "@/api/models/acroStack/appUsers/AppUserDto";

export type UserFormUser = Pick<
  AcroStackAppUsersAppUserDto,
  "id" | "userName" | "name" | "surname" | "email" | "phoneNumber" | "isActive"
>;

export function toFormUser(dto: AcroStackAppUsersAppUserDto): UserFormUser {
  return {
    id: dto.id,
    userName: dto.userName,
    name: dto.name,
    surname: dto.surname,
    email: dto.email,
    phoneNumber: dto.phoneNumber,
    isActive: dto.isActive,
  };
}
