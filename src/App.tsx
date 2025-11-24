import { useState } from 'react'
import { Hero } from '@/components/Hero'
import { FeatureGrid } from '@/components/FeatureGrid'
import { LLMPlayground } from '@/components/LLMPlayground'
import { KVStorageDemo } from '@/components/KVStorageDemo'
import { UserInfoDisplay } from '@/components/UserInfoDisplay'
import { CodeExamples } from '@/components/CodeExamples'
import { Toaster } from '@/components/ui/sonner'
import { Sparkle } from '@phosphor-icons/react'

function App() {
  const [activeSection, setActiveSection] = useState<string>('')

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 space-y-32 md:space-y-40">
        <FeatureGrid onFeatureClick={setActiveSection} />
        
        <section id="llm">
          <LLMPlayground />
        </section>
        
        <section id="kv-storage">
          <KVStorageDemo />
        </section>
        
        <section id="user">
          <UserInfoDisplay />
        </section>
        
        <section id="examples">
          <CodeExamples />
        </section>
      </main>
      
      <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Sparkle size={16} weight="duotone" className="text-primary" />
              <span>Built with</span>
              <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GitHub Spark
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Explore the possibilities of building without boundaries
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
