import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAuth } from '@/lib/auth/AuthContext'

/**
 * Login page. Redirects to OAuth auth server for sign-in.
 * For non-tiered: HostWithIds serves both API and Auth; redirect goes to /connect/authorize.
 */
export function LoginPage() {
  const { t } = useTranslation()
  const { isAuthenticated, isLoading, login } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      void login()
    }
  }, [isLoading, isAuthenticated, login])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('AbpAccount::Login')}</CardTitle>
          <CardDescription>
            {t('AbpAccount::LoginSubtitle', 'Redirecting to sign in...')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div
              className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"
              aria-hidden
            />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isAuthenticated) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('AbpAccount::Login')}</CardTitle>
          <CardDescription>
            {t('AbpAccount::AlreadyLoggedIn', 'You are already logged in.')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link to="/">{t('AbpUi::BackToTheApplication')}</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('AbpAccount::Login')}</CardTitle>
        <CardDescription>
          {t('AbpAccount::LoginSubtitle', 'Sign in to your account')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" onClick={() => void login()}>
          {t('AbpAccount::Login')}
        </Button>
        <div className="space-y-2 text-center text-sm text-muted-foreground">
          <p>
            <Link
              to="/account/forgot-password"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('AbpAccount::ForgotPassword')}
            </Link>
          </p>
          <p>
            {t('AbpAccount::DontHaveAnAccount', "Don't have an account?")}{' '}
            <Link
              to="/account/register"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('AbpAccount::Register')}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
