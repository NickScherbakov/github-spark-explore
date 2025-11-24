import { Sparkle, Database, User, Code, ArrowRight } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const features: Feature[] = [
  {
    id: 'llm',
    icon: <Sparkle size={28} weight="duotone" />,
    title: 'LLM Integration',
    description: 'Call AI models directly from your app with simple async functions. No API keys or complex setup required.',
    href: '#llm'
  },
  {
    id: 'kv-storage',
    icon: <Database size={28} weight="duotone" />,
    title: 'KV Storage',
    description: 'Persist data effortlessly with reactive key-value storage. Works like React state but survives refreshes.',
    href: '#kv-storage'
  },
  {
    id: 'user',
    icon: <User size={28} weight="duotone" />,
    title: 'User Context',
    description: 'Access authenticated user information including GitHub profile, avatar, and ownership status.',
    href: '#user'
  },
  {
    id: 'examples',
    icon: <Code size={28} weight="duotone" />,
    title: 'Code Examples',
    description: 'Copy-paste ready code snippets to quickly integrate Spark features into your applications.',
    href: '#examples'
  }
]

interface FeatureGridProps {
  onFeatureClick: (id: string) => void
}

export function FeatureGrid({ onFeatureClick }: FeatureGridProps) {
  return (
    <div className="mb-32">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Built-in Superpowers
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Everything you need to build powerful applications without complex infrastructure
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.a
            key={feature.id}
            href={feature.href}
            onClick={() => onFeatureClick(feature.id)}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="relative p-8 h-full border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 active:translate-y-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col h-full gap-5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/8 to-accent/8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary/12 group-hover:to-accent/12 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {feature.icon}
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  Learn more
                  <ArrowRight size={16} weight="bold" className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
