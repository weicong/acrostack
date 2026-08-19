/* oxlint-disable */

export type AcroStackFileManagementFileShareDto = {
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
    fileEntryId?: string;
    token?: string | null;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    expirationTime?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    maxDownloadCount?: number | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    downloadCount?: number;
    isRevoked?: boolean;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    creationTime?: string;
};
