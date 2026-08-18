import type { AcroStackIdentityClaimsIdentityClaimDto as IdentityClaimDto } from "@/api/models/acroStack/identityClaims/IdentityClaimDto";

export type ClaimItem = IdentityClaimDto;

export type ClaimFormValues = {
  claimType: string;
  claimValue: string;
};
