/* oxlint-disable */

export type AcroStackAppUsersAppUserDto = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    userName?: string | null;
    email?: string | null;
    name?: string | null;
    surname?: string | null;
    phoneNumber?: string | null;
    isActive?: boolean;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    creationTime?: string;
};
