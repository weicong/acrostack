import { Outlet, useLocation } from '@tanstack/react-router'
import { AppLayout } from './AppLayout'
import { AccountLayout } from './AccountLayout'

/**
 * Picks layout based on path: AccountLayout for auth pages (login, register, forgot/reset password),
 * AppLayout for the rest (including /account/manage, /account/sessions, etc.).
 */
export function RootLayout() {
  const { pathname } = useLocation()
  const isAccountAuth =
    pathname.startsWith('/account/login') ||
    pathname.startsWith('/account/register') ||
    pathname.startsWith('/account/forgot-password') ||
    pathname.startsWith('/account/reset-password') ||
    pathname === '/account'

  return (
    <>
      {isAccountAuth ? (
        <AccountLayout>
          <Outlet />
        </AccountLayout>
      ) : (
        <AppLayout />
      )}
    </>
  )
}
