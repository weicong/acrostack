import type { AcroStackIdentityClaimsIdentityClaimTypeDto as IdentityClaimTypeDto } from "@/api/models/acroStack/identityClaims/IdentityClaimTypeDto";
import type { AcroStackIdentityClaimsCreateIdentityClaimTypeDto as CreateClaimTypeDto } from "@/api/models/acroStack/identityClaims/CreateIdentityClaimTypeDto";

/** List/form item as returned by identity-claim-type endpoints. */
export type ClaimTypeItem = IdentityClaimTypeDto;

/**
 * Form-level claim-type shape. Carries the fields needed by the create/update
 * endpoints plus `isStatic` to disable the name field when editing built-in
 * claim types. 从生成 DTO 派生以保持字段同步；`name` 在表单中必填非空。
 */
export type ClaimTypeFormValues = Required<
  Pick<CreateClaimTypeDto, "description" | "valueType" | "isRequired" | "regex">
> & { name: string };

/** Subset of {@link ClaimTypeItem} used to seed the edit form. */
export type ClaimTypeFormSeed = Pick<
  IdentityClaimTypeDto,
  "id" | "name" | "description" | "valueType" | "isRequired" | "regex" | "isStatic"
>;

export function toFormSeed(dto: ClaimTypeItem): ClaimTypeFormSeed {
  return {
    id: dto.id,
    name: dto.name ?? "",
    description: dto.description ?? null,
    valueType: dto.valueType ?? 0,
    isRequired: dto.isRequired ?? false,
    regex: dto.regex ?? null,
    isStatic: dto.isStatic,
  };
}
