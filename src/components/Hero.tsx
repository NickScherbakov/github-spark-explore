import { Sparkle, ArrowRight, Code } from '@phosphor-icons/react'
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative border-b border-border bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20 ring-1 ring-white/10">
              <Sparkle size={32} weight="fill" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              GitHub Spark
            </h1>
          </div>
          
          <div className="space-y-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Build powerful web applications with AI, persistent storage, and user authentication—all without complex infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-12 px-6 text-base font-bold shadow-lg shadow-primary/20">
                <a
                  href="#llm"
                  onClick={(e) => handleScroll(e, 'llm')}
                >
                  Try the Demos
                  <ArrowRight className="ml-2 h-5 w-5" weight="bold" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base font-bold bg-background/50 backdrop-blur-sm">
                <a
                  href="#examples"
                  onClick={(e) => handleScroll(e, 'examples')}
                >
                  View Code Examples
                  <Code className="ml-2 h-5 w-5" weight="bold" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
