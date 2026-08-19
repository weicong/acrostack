/* oxlint-disable */

export type VoloAbpAccountChangePasswordInput = {
    /**
     * @minLength 0
     * @maxLength 128
     * @type string | undefined
    */
    currentPassword?: string | null;
    /**
     * @minLength 0
     * @maxLength 128
     * @type string
    */
    newPassword: string;
};
