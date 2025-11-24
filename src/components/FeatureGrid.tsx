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
    <div className="mb-16">
      <div className="mb-12 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Built-in Superpowers
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Everything you need to build powerful applications without complex infrastructure
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <a
            key={feature.id}
            href={feature.href}
            onClick={() => onFeatureClick(feature.id)}
            className="group block border border-border p-6 hover:border-primary transition-colors"
          >
            <div className="flex flex-col h-full gap-4">
              <div className="text-primary">
                {feature.icon}
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="flex items-center text-sm font-semibold text-primary">
                Learn more
                <ArrowRight size={16} weight="bold" className="ml-1" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
