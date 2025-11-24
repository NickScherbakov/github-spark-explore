import { Sparkle, Database, User, Code } from '@phosphor-icons/react'
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
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Built-in Superpowers
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
            <Card className="p-6 h-full border border-border transition-all duration-250 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              <div className="flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 transition-all group-hover:bg-accent/10 group-hover:text-accent">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
