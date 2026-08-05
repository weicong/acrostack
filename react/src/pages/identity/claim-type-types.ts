import type { AcroStackServicesDtosIdentityClaimsIdentityClaimTypeDto as IdentityClaimTypeDto } from "@/api/models/acroStack/services/dtos/identityClaims/IdentityClaimTypeDto";

/** List/form item as returned by identity-claim-type endpoints. */
export type ClaimTypeItem = IdentityClaimTypeDto;

/**
 * Form-level claim-type shape. Carries the fields needed by the create/update
 * endpoints plus `isStatic` to disable the name field when editing built-in
 * claim types.
 */
export type ClaimTypeFormValues = {
  name: string;
  description: string | null;
  valueType: number;
  isRequired: boolean;
  regex: string | null;
};

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
