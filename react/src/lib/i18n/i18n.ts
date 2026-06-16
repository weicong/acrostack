import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";

export const LANGUAGE_STORAGE_KEY = "abp_culture";
const DEFAULT_LANGUAGE = "en";

function setDocumentLanguage(language: string) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }
}

function getInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

const initialLanguage = getInitialLanguage();
setDocumentLanguage(initialLanguage);

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export function persistLanguageSelection(language: string) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage persistence failures and still update the document language.
    }
  }
  setDocumentLanguage(language);
}

export default i18n;
