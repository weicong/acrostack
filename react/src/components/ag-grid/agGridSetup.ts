import { ModuleRegistry, AllCommunityModule, themeAlpine } from "ag-grid-enterprise";
import { AllEnterpriseModule, LicenseManager } from "ag-grid-enterprise";

const licenseKey = import.meta.env.VITE_AG_GRID_LICENSE;

if (licenseKey) {
  LicenseManager.setLicenseKey(licenseKey);
}

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

const agGridTheme = themeAlpine;

export { agGridTheme };
