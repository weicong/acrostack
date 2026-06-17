import { useEffect, useMemo, useState } from 'react'
import { Globe, LogIn, Menu, Moon, Sun, Monitor } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { appConfig, fetchAppConfig, fetchAppLocalization } from '@/lib/auth/permissions'
import { persistLanguageSelection } from '@/lib/i18n/i18n'
import { useTheme, type Theme } from '@/lib/theme/ThemeProvider'
import { UserMenu } from './UserMenu'
import { useAuth } from '@/lib/auth/AuthContext'

interface HeaderProps {
  onMenuClick?: () => void
}

interface LocalizationLanguage {
  cultureName?: string
  uiCultureName?: string
  name?: string
  displayName?: string
}

interface LocalizationSection {
  languages?: LocalizationLanguage[]
}

interface LocalizationResource {
  texts?: Record<string, string>
}

interface LocalizationData {
  resources?: Record<string, LocalizationResource>
}

const FALLBACK_LANGUAGE: LocalizationLanguage = {
  cultureName: 'en',
  displayName: 'English',
}

const THEME_CYCLE: Theme[] = ['light', 'dark', 'system']

function getLanguageCulture(language: LocalizationLanguage): string {
  return language.cultureName ?? language.uiCultureName ?? language.name ?? ''
}

function getLanguageLabel(language: LocalizationLanguage): string {
  return language.displayName ?? getLanguageCulture(language).toUpperCase()
}

function flattenLocalizationResources(localization: LocalizationData) {
  const translations: Record<string, string> = {}

  for (const [resourceName, resource] of Object.entries(localization.resources ?? {})) {
    for (const [key, value] of Object.entries(resource.texts ?? {})) {
      translations[`${resourceName}::${key}`] = value
      translations[key] ??= value
    }
  }

  return translations
}

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const { t } = useTranslation()

  function cycleTheme() {
    const currentIndex = THEME_CYCLE.indexOf(theme)
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % THEME_CYCLE.length
    setTheme(THEME_CYCLE[nextIndex])
  }

  const label =
    theme === 'light'
      ? t('AbpSettingManagement::Theme.Light', 'Light')
      : theme === 'dark'
        ? t('AbpSettingManagement::Theme.Dark', 'Dark')
        : t('AbpSettingManagement::Theme.System', 'System')

  const Icon = theme === 'system' ? Monitor : resolvedTheme === 'light' ? Sun : Moon

  return (
    <Button variant="ghost" size="icon" onClick={cycleTheme} aria-label={label} title={label}>
      <Icon className="size-5" />
    </Button>
  )
}

function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const { getAccessToken } = useAuth()
  const snapshot = appConfig.useSnapshot()
  const [isChanging, setIsChanging] = useState(false)
  const localization = snapshot.sections?.localization as LocalizationSection | null | undefined
  const currentCulture = i18n.language || FALLBACK_LANGUAGE.cultureName || 'en'

  useEffect(() => {
    if (snapshot.initialized || snapshot.loading) {
      return
    }

    void getAccessToken()
      .then((token) => fetchAppConfig(token))
      .catch(() => undefined)
  }, [getAccessToken, snapshot.initialized, snapshot.loading])

  useEffect(() => {
    if (!currentCulture || i18n.hasResourceBundle(currentCulture, 'translation')) {
      return
    }

    let disposed = false

    void getAccessToken()
      .then((token) => fetchAppLocalization(currentCulture, token))
      .then((localizationData) => {
        if (disposed || i18n.hasResourceBundle(currentCulture, 'translation')) {
          return
        }

        const translations = flattenLocalizationResources(localizationData as LocalizationData)
        if (Object.keys(translations).length === 0) {
          return
        }

        i18n.addResourceBundle(currentCulture, 'translation', translations, true, true)
        void i18n.changeLanguage(currentCulture)
      })
      .catch(() => undefined)

    return () => {
      disposed = true
    }
  }, [currentCulture, getAccessToken, i18n])

  const languages = useMemo(() => {
    const configuredLanguages = (localization?.languages ?? [])
      .map((language) => ({
        ...language,
        cultureName: getLanguageCulture(language),
      }))
      .filter((language) => Boolean(language.cultureName))

    const nextLanguages = configuredLanguages.length > 0 ? configuredLanguages : [FALLBACK_LANGUAGE]

    return nextLanguages.some((language) => getLanguageCulture(language) === currentCulture)
      ? nextLanguages
      : [{ cultureName: currentCulture, displayName: currentCulture.toUpperCase() }, ...nextLanguages]
  }, [currentCulture, localization?.languages])

  const currentLanguage = languages.find((language) => getLanguageCulture(language) === currentCulture)
  const languageLabel = t('::Language', 'Language')

  if (languages.length <= 1) {
    return null
  }

  async function changeLanguage(culture: string) {
    if (!culture || culture === currentCulture) {
      return
    }

    setIsChanging(true)

    try {
      const token = await getAccessToken()
      const localizationData = await fetchAppLocalization(culture, token)
      const translations = flattenLocalizationResources(localizationData as LocalizationData)

      if (Object.keys(translations).length > 0) {
        i18n.addResourceBundle(culture, 'translation', translations, true, true)
      }
    } catch {
      // Ignore localization fetch failures and still switch the UI culture.
    } finally {
      persistLanguageSelection(culture)
      await i18n.changeLanguage(culture)
      setIsChanging(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={isChanging}
          aria-label={`${languageLabel}: ${getLanguageLabel(currentLanguage ?? FALLBACK_LANGUAGE)}`}
          title={`${languageLabel}: ${getLanguageLabel(currentLanguage ?? FALLBACK_LANGUAGE)}`}
        >
          <Globe className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => {
          const culture = getLanguageCulture(language)

          return (
            <DropdownMenuItem
              key={culture}
              onClick={() => void changeLanguage(culture)}
              className={culture === currentCulture ? 'bg-accent' : ''}
            >
              {getLanguageLabel(language)}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header({ onMenuClick }: HeaderProps) {
  const { t } = useTranslation()
  const { isAuthenticated, isLoading, login } = useAuth()

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b border-border bg-background px-4">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label={t('Menu:Menu')}
      >
        <Menu className="size-5" />
      </Button>
      <div className="flex flex-1 items-center gap-2">
        <span className="font-semibold">AcroStack</span>
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
        {!isLoading && (
          isAuthenticated ? (
            <UserMenu />
          ) : (
            <Button size="sm" onClick={() => void login()}>
              <LogIn className="size-4" />
              {t('AbpAccount::Login')}
            </Button>
          )
        )}
      </div>
    </header>
  )
}
