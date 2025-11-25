import { Sparkle, Database, User, Code, ArrowRight } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

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
    titleKey: 'sections.llm',
    descriptionKey: 'sections.llmDesc',
    href: '#llm'
  },
  {
    id: 'kv-storage',
    icon: <Database size={28} weight="duotone" />,
    titleKey: 'sections.kv',
    descriptionKey: 'sections.kvDesc',
    href: '#kv-storage'
  },
  {
    id: 'user',
    icon: <User size={28} weight="duotone" />,
    titleKey: 'sections.user',
    descriptionKey: 'sections.userDesc',
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <a
            key={feature.id}
            href={feature.href}
            onClick={(e) => handleClick(e, feature.id)}
            className="group block h-full"
          >
            <Card className="h-full p-6 border-border/60 bg-card/50 hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="flex flex-col h-full gap-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
                
                <div className="flex items-center text-sm font-bold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight size={16} weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
