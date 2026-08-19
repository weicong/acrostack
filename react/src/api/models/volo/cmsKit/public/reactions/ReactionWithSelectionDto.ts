/* oxlint-disable */

import type { VoloCmsKitPublicReactionsReactionDto } from "./ReactionDto";

export type VoloCmsKitPublicReactionsReactionWithSelectionDto = {
  reaction?: VoloCmsKitPublicReactionsReactionDto;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  count?: number;
  isSelectedByCurrentUser?: boolean;
};
