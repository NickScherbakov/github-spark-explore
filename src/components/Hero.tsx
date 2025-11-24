import { Sparkle, ArrowRight, Code } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground">
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
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Try the Demos
                <ArrowRight size={16} weight="bold" />
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="#examples"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                View Code Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
