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
      
      <main className="max-w-7xl mx-auto px-6 py-16">
        <FeatureGrid onFeatureClick={setActiveSection} />
        
        <section id="llm" className="mb-24 scroll-mt-8">
          <LLMPlayground />
        </section>
        
        <section id="kv-storage" className="mb-24 scroll-mt-8">
          <KVStorageDemo />
        </section>
        
        <section id="user" className="mb-24 scroll-mt-8">
          <UserInfoDisplay />
        </section>
        
        <section id="examples" className="mb-24 scroll-mt-8">
          <CodeExamples />
        </section>
      </main>
      
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground text-sm">
          Built with GitHub Spark · Explore the possibilities
        </div>
      </footer>
    </div>
  )
}

export default App
