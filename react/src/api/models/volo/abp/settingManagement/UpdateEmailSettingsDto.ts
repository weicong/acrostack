/* oxlint-disable */

export type VoloAbpSettingManagementUpdateEmailSettingsDto = {
    /**
     * @maxLength 256
     * @type string | undefined
    */
    smtpHost?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    smtpPort?: number;
    /**
     * @maxLength 1024
     * @type string | undefined
    */
    smtpUserName?: string | null;
    /**
     * @description
     * Format: `password`
     * @maxLength 1024
     * @type string | undefined
    */
    smtpPassword?: string | null;
    /**
     * @maxLength 1024
     * @type string | undefined
    */
    smtpDomain?: string | null;
    smtpEnableSsl?: boolean;
    smtpUseDefaultCredentials?: boolean;
    /**
     * @minLength 1
     * @maxLength 1024
     * @type string
    */
    defaultFromAddress: string;
    /**
     * @minLength 1
     * @maxLength 1024
     * @type string
    */
    defaultFromDisplayName: string;
};
