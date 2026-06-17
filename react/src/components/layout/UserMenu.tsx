import { LogOut, Settings, Monitor, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth/AuthContext'
import { useCurrentUser } from '@/lib/auth/permissions'
import { getBackendAccountUrl } from '@/lib/runtimeConfig'

export function UserMenu() {
  const { t } = useTranslation()
  const { user, logout } = useAuth()
  const currentUser = useCurrentUser()

  const displayName =
    currentUser?.userName ??
    currentUser?.name ??
    user?.userName ??
    user?.name ??
    user?.email ??
    null
  const displayFullName = currentUser?.name ?? user?.name ?? displayName
  const displayEmailAddress = currentUser?.email ?? user?.email

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-2"
          aria-label={displayName ?? t('AbpAccount::MyAccount')}
        >
          <User className="size-4 shrink-0" />
          {displayName && (
            <span className="hidden max-w-32 truncate text-sm sm:inline">{displayName}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {displayFullName && (
              <p className="text-sm font-medium leading-none">{displayFullName}</p>
            )}
            {displayName && displayFullName !== displayName && (
              <p className="text-xs leading-none text-muted-foreground">{displayName}</p>
            )}
            {displayEmailAddress && (
              <p className="text-xs leading-none text-muted-foreground">{displayEmailAddress}</p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href={getBackendAccountUrl('/account/manage')}>
            <Settings className="size-4" />
            {t('AbpAccount::MyAccount')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href={getBackendAccountUrl('/account/sessions')}>
            <Monitor className="size-4" />
            {t('AbpAccount::Sessions')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-destructive focus:text-destructive"
          onSelect={(e) => {
            e.preventDefault()
            void logout()
          }}
        >
          <LogOut className="size-4" />
          {t('AbpAccount::Logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
