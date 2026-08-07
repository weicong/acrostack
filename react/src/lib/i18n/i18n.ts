import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zhHans from "@/locales/zh-Hans.json";

export const LANGUAGE_STORAGE_KEY = "abp_culture";
const DEFAULT_LANGUAGE = "zh-Hans";
const SUPPORTED_LANGUAGES = ["zh-Hans"];

/**
 * i18next post-processor that substitutes .NET-style positional placeholders
 * (`{0}`, `{1}`, …) found in ABP localization resources.
 *
 * ABP ships JSON resources using `string.Format("{0}", arg)` conventions,
 * while i18next defaults to `{{key}}` named interpolation. This processor
 * runs after i18next's own interpolation and resolves any remaining `{N}`
 * placeholders by looking up the numeric key in the options bag.
 *
 * Usage: `t("AbpAccount::BackToMyAccount", { "0": impersonatorLabel })`.
 */
const dotNetPlaceholderPostProcessor = {
  type: "postProcessor" as const,
  name: "dotNetPlaceholder",
  process(value: string, _key: string, options: Record<string, unknown>): string {
    if (typeof value !== "string") return value;
    return value.replace(/\{(\d+)\}/g, (match, index: string) => {
      const replacement = options[index];
      if (replacement === undefined || replacement === null) return match;
      // Avoid `[object Object]` for non-primitive values.
      return typeof replacement === "string"
        ? replacement
        : typeof replacement === "number" || typeof replacement === "boolean"
          ? String(replacement)
          : match;
    });
  },
};

function setDocumentLanguage(language: string) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }
}

function getInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
    return DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

const initialLanguage = getInitialLanguage();
setDocumentLanguage(initialLanguage);

void i18n
  .use(dotNetPlaceholderPostProcessor)
  .use(initReactI18next)
  .init({
    resources: {
      "zh-Hans": { translation: zhHans },
    },
    lng: initialLanguage,
    fallbackLng: "zh-Hans",
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
    },
    postProcess: ["dotNetPlaceholder"],
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
