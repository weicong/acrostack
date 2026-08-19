/* oxlint-disable */

export type VoloAbpUsersUserData = {
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
    tenantId?: string | null;
    userName?: string | null;
    name?: string | null;
    surname?: string | null;
    isActive?: boolean;
    email?: string | null;
    emailConfirmed?: boolean;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
};
