import { useState } from 'react'
import { Hero } from '@/components/Hero'
import { FeatureGrid } from '@/components/FeatureGrid'
import { LLMPlayground } from '@/components/LLMPlayground'
import { KVStorageDemo } from '@/components/KVStorageDemo'
import { UserInfoDisplay } from '@/components/UserInfoDisplay'
import { CodeExamples } from '@/components/CodeExamples'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [activeSection, setActiveSection] = useState<string>('')

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <FeatureGrid onFeatureClick={setActiveSection} />
        
        <section id="llm" className="mb-32">
          <LLMPlayground />
        </section>
        
        <section id="kv-storage" className="mb-32">
          <KVStorageDemo />
        </section>
        
        <section id="user" className="mb-32">
          <UserInfoDisplay />
        </section>
        
        <section id="examples" className="mb-20">
          <CodeExamples />
        </section>
      </main>
      
      <footer className="border-t-2 border-border/50 py-12 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm font-medium">
            Built with <span className="text-primary font-semibold">GitHub Spark</span> · Explore the possibilities
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
