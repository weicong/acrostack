import type { AcroStackServicesDtosIdentityClaimsIdentityClaimDto as IdentityClaimDto } from "@/api/models/acroStack/services/dtos/identityClaims/IdentityClaimDto";

export type ClaimItem = IdentityClaimDto;

export type ClaimFormValues = {
  claimType: string;
  claimValue: string;
};
