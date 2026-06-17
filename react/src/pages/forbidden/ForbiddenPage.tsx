import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ShieldX } from 'lucide-react'

export function ForbiddenPage() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 p-8">
      <ShieldX className="h-16 w-16 text-destructive" aria-hidden />
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">403</h1>
        <p className="text-muted-foreground">
          {t('AbpUi::YouAreNotAuthorized')}
        </p>
      </div>
      <Button asChild>
        <Link to="/">{t('AbpUi::BackToTheApplication')}</Link>
      </Button>
    </div>
  )
}
