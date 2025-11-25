import { Sparkle, Database, User, Code, ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface Feature {
  id: string
  icon: React.ReactNode
  titleKey: string
  descriptionKey: string
  href: string
}

const features: Feature[] = [
  {
    id: 'llm',
    icon: <Sparkle size={28} weight="duotone" />,
    title: 'LLM Integration',
    description: 'Built-in AI capabilities with prompt templates and structured outputs for intelligent features.',
    href: '#llm'
  },
  {
    id: 'kv-storage',
    icon: <Database size={28} weight="duotone" />,
    title: 'KV Storage',
    description: 'Persist data seamlessly with a simple key-value store that works across sessions.',
    href: '#kv-storage'
  },
  {
    id: 'user',
    icon: <User size={28} weight="duotone" />,
    title: 'User Context',
    description: 'Access user information including GitHub profile, avatar, and ownership status.',
    href: '#user'
  },
  {
    id: 'examples',
    icon: <Code size={28} weight="duotone" />,
    titleKey: 'sections.examples',
    descriptionKey: 'sections.examplesDesc',
    href: '#examples'
  }
]

interface FeatureGridProps {
  onFeatureClick: (id: string) => void
}

export function FeatureGrid({ onFeatureClick }: FeatureGridProps) {
  const { t } = useTranslation()
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    onFeatureClick(id)
  }

  return (
    <div className="mb-16">
      <div className="mb-12 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          {t('sections.superpowers')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {t('sections.superpowersDesc')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.a
            key={feature.id}
            href={feature.href}
            onClick={(e) => handleClick(e, feature.id)}
            className="group relative block p-8 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              <span>Learn more</span>
              <ArrowRight size={16} weight="bold" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
