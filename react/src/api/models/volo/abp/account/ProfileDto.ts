/* oxlint-disable */

export type VoloAbpAccountProfileDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    userName?: string | null;
    email?: string | null;
    name?: string | null;
    surname?: string | null;
    phoneNumber?: string | null;
    isExternal?: boolean;
    hasPassword?: boolean;
    concurrencyStamp?: string | null;
};
