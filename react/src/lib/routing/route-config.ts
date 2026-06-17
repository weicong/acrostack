/**
 * Central route and menu configuration.
 * Used by router and Sidebar; each item may have requiredPolicy for permission checks.
 */
import type { LucideIcon } from 'lucide-react'
import { Home, BookOpen, Users, ShieldCheck } from 'lucide-react'
import { getAdminConsoleUrl } from '@/lib/runtimeConfig'

export interface RouteConfigItem {
  path: string
  nameKey: string
  icon?: LucideIcon
  order?: number
  /** External destination (URL or resolver function) when item should not use SPA routing */
  externalHref?: string | (() => string)
  /** Anchor target for external destinations (defaults to "_self") */
  externalTarget?: '_self' | '_blank'
  /** Anchor rel value for external destinations */
  externalRel?: string
  /** ABP permission policy (supports compound: "A || B", "A && B") */
  requiredPolicy?: string
  /** When true, only show when authenticated (no specific policy) */
  requiresAuth?: boolean
  /** Nested sub-menu items rendered as collapsible children in the sidebar */
  children?: RouteConfigItem[]
}

/**
 * Application menu/route items. Order determines display order.
 * Items with requiredPolicy are hidden when the user lacks that permission.
 */
export const routeConfig: RouteConfigItem[] = [
  { path: '/', nameKey: 'Menu:Home', icon: Home, order: 1 },
  {
    path: '/identity/users',
    nameKey: 'AbpIdentity::Users',
    icon: Users,
    order: 5,
    requiredPolicy: 'AbpIdentity.Users',
  },
  {
    path: '/admin-console',
    nameKey: 'Menu:AdminConsole',
    icon: ShieldCheck,
    order: 6,
    requiresAuth: true,
    externalHref: getAdminConsoleUrl,
    externalTarget: '_blank',
    externalRel: 'noopener noreferrer',
  },
]
