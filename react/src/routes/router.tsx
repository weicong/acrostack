import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
  Outlet,
} from '@tanstack/react-router'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/home/HomePage'
import { ForbiddenPage } from '@/pages/forbidden/ForbiddenPage'
import { LoginPage } from '@/pages/account/LoginPage'
import { RegisterPage } from '@/pages/account/RegisterPage'
import { ForgotPasswordPage } from '@/pages/account/ForgotPasswordPage'
import { ResetPasswordPage } from '@/pages/account/ResetPasswordPage'
import { IdentityLayout } from '@/components/identity/IdentityLayout'
import { UsersPage } from '@/pages/identity/UsersPage'
import { authGuard, createPermissionGuard } from '@/lib/routing/guards'

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found</p>
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const forbiddenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/403',
  component: ForbiddenPage,
})

const accountLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/account',
  component: () => <Outlet />,
})

const accountIndexRoute = createRoute({
  getParentRoute: () => accountLayoutRoute,
  path: '/',
  beforeLoad: () => redirect({ to: '/account/login' }),
  component: () => null,
})

const accountLoginRoute = createRoute({
  getParentRoute: () => accountLayoutRoute,
  path: 'login',
  component: LoginPage,
})

const accountRegisterRoute = createRoute({
  getParentRoute: () => accountLayoutRoute,
  path: 'register',
  component: RegisterPage,
})

const accountForgotPasswordRoute = createRoute({
  getParentRoute: () => accountLayoutRoute,
  path: 'forgot-password',
  component: ForgotPasswordPage,
})

const accountResetPasswordRoute = createRoute({
  getParentRoute: () => accountLayoutRoute,
  path: 'reset-password',
  component: ResetPasswordPage,
})

const accountRoute = accountLayoutRoute.addChildren([
  accountIndexRoute,
  accountLoginRoute,
  accountRegisterRoute,
  accountForgotPasswordRoute,
  accountResetPasswordRoute,
])


const identityLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/identity',
  component: IdentityLayout,
  beforeLoad: authGuard,
})

const identityIndexRoute = createRoute({
  getParentRoute: () => identityLayoutRoute,
  path: '/',
  beforeLoad: () => redirect({ to: '/identity/users' }),
  component: () => null,
})

const identityUsersRoute = createRoute({
  getParentRoute: () => identityLayoutRoute,
  path: 'users',
  component: UsersPage,
  beforeLoad: createPermissionGuard('AbpIdentity.Users'),
})

const identityRoute = identityLayoutRoute.addChildren([
  identityIndexRoute,
  identityUsersRoute,
])

const routeTree = rootRoute.addChildren([
  indexRoute,
  forbiddenRoute,
  accountRoute,
  identityRoute,
])

export const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
