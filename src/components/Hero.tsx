import { Sparkle, ArrowRight, Code } from '@phosphor-icons/react'

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
    <div className="relative border-b border-border bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg shadow-sm">
              <Sparkle size={24} weight="fill" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              GitHub Spark
            </h1>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Build powerful web applications with AI, persistent storage, and user authentication—all without complex infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#llm"
                onClick={(e) => handleScroll(e, 'llm')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-sm"
              >
                Try the Demos
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#examples"
                onClick={(e) => handleScroll(e, 'examples')}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              >
                View Code Examples
                <Code size={16} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
