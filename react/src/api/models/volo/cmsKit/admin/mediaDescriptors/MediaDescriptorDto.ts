/* oxlint-disable */

export type VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto = {
    readonly extraProperties?: {
        [key: string]: unknown;
    } | null;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    id?: string;
    name?: string | null;
    mimeType?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    size?: number;
};
