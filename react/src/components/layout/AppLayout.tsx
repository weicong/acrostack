import { useState } from 'react'
import { Outlet } from '@tanstack/react-router'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-svh flex-col overflow-hidden">
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div
          className={`
            fixed inset-0 z-40 bg-black/50 lg:hidden
            ${mobileMenuOpen ? 'block' : 'hidden'}
          `}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`
            fixed left-0 top-0 z-50 flex h-full min-h-0 w-56 shrink-0 flex-col overflow-hidden border-r border-border bg-background transition-transform lg:static lg:min-h-0 lg:translate-x-0 lg:self-stretch
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
        </aside>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
