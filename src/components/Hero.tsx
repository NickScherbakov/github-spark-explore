import { Sparkle, ArrowRight, Code } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.015] to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.22_262/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,oklch(0.70_0.19_290/0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 shadow-xl shadow-primary/5"
          >
            <Sparkle className="text-primary" size={40} weight="duotone" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="block text-foreground">
                GitHub Spark
              </span>
              <span className="block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
                Capabilities
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Build powerful web applications with AI, persistent storage, and user authentication—all without complex infrastructure
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <a
              href="#llm"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Try the Demos
              <ArrowRight size={20} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#examples"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm text-foreground font-semibold text-base transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Code size={20} weight="duotone" />
              View Code Examples
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  )
}
