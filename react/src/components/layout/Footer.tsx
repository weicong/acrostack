export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 px-4 py-3">
      <div className="flex justify-center text-sm text-muted-foreground">
        <span>
          {currentYear}© by{' '}
          <a
            href="https://volosoft.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Volosoft
          </a>
        </span>
      </div>
    </footer>
  )
}
