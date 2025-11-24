import { Sparkle, ArrowRight, Code } from '@phosphor-icons/react'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-primary/[0.02] to-accent/[0.03]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10 shadow-lg shadow-primary/5">
            <Sparkle className="text-primary" size={40} weight="duotone" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                GitHub Spark
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Capabilities
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Build powerful web applications with AI, persistent storage, and user authentication—all without complex infrastructure
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#llm"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Try the Demos
              <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#examples"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border bg-card/80 backdrop-blur-sm text-foreground font-semibold text-base transition-all hover:border-accent hover:bg-accent/5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Code size={20} weight="duotone" />
              View Code Examples
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}
