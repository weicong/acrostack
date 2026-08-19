/* oxlint-disable */

export type VoloAbpSettingManagementEmailSettingsDto = {
    smtpHost?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    smtpPort?: number;
    smtpUserName?: string | null;
    smtpPassword?: string | null;
    smtpDomain?: string | null;
    smtpEnableSsl?: boolean;
    smtpUseDefaultCredentials?: boolean;
    defaultFromAddress?: string | null;
    defaultFromDisplayName?: string | null;
};
