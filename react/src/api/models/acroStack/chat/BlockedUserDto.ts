/* oxlint-disable */

export type AcroStackChatBlockedUserDto = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    blockedUserId?: string;
    blockedUserName?: string | null;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    creationTime?: string;
};
