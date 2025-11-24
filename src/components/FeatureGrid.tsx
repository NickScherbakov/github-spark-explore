import { Sparkle, Database, User, Code, ArrowRight } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

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
    icon: <Sparkle size={32} weight="duotone" />,
    title: 'LLM Integration',
    description: 'Call AI models directly from your app with simple async functions. No API keys or complex setup required.',
    href: '#llm'
  },
  {
    id: 'kv-storage',
    icon: <Database size={32} weight="duotone" />,
    title: 'KV Storage',
    description: 'Persist data effortlessly with reactive key-value storage. Works like React state but survives refreshes.',
    href: '#kv-storage'
  },
  {
    id: 'user',
    icon: <User size={32} weight="duotone" />,
    title: 'User Context',
    description: 'Access authenticated user information including GitHub profile, avatar, and ownership status.',
    href: '#user'
  },
  {
    id: 'examples',
    icon: <Code size={32} weight="duotone" />,
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
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Built-in Superpowers
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Everything you need to build powerful applications without complex infrastructure
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <a
            key={feature.id}
            href={feature.href}
            onClick={() => onFeatureClick(feature.id)}
            className="group"
          >
            <Card className="relative p-8 h-full border-2 border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 active:translate-y-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight size={16} weight="bold" className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
