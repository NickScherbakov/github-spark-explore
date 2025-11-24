import { Sparkle } from '@phosphor-icons/react'

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Sparkle className="text-primary" size={32} weight="duotone" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            GitHub Spark
            <span className="block text-primary mt-2">Capabilities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore the powerful features that make building web applications effortless.
            From AI integration to persistent storage, discover what you can create.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="#llm"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95"
            >
              Try the Demos
            </a>
            <a
              href="#examples"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium transition-all hover:border-accent hover:bg-accent/5"
            >
              View Code Examples
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
