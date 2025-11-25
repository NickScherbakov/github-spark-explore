import { Sparkle } from '@phosphor-icons/react'
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md">
            <Sparkle size={16} weight="fill" />
          </div>
          <span>GitHub Spark</span>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
