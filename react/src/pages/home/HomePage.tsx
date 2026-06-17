import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth/AuthContext'

export function HomePage() {
  const { t } = useTranslation()
  const { isAuthenticated, navigateToLogin } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('Welcome')}</h1>
        {!isAuthenticated && (
          <div className="mt-4 space-y-2">
            <Button onClick={navigateToLogin}>{t('AbpAccount::Login')}</Button>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">ABP React UI</h2>
        <p className="mt-2 text-muted-foreground">
          This application is built with the ABP Framework React UI. You can use the pre-built
          components, layouts, and services to develop your application. Explore the full React UI
          documentation to learn how to customize and extend every aspect of the UI.
        </p>
        <a
          href="https://abp.io/docs/latest/framework/ui/react/index"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block"
        >
          <Button variant="outline">React UI Documentation</Button>
        </a>
      </div>
    </div>
  )
}
