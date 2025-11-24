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
      
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-24">
        <FeatureGrid onFeatureClick={setActiveSection} />
        
        <section id="llm" className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">LLM Playground</h2>
          <LLMPlayground />
        </section>
        
        <section id="kv-storage" className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">KV Storage</h2>
          <KVStorageDemo />
        </section>
        
        <section id="user" className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">User Info</h2>
          <UserInfoDisplay />
        </section>
        
        <section id="examples" className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
          <CodeExamples />
        </section>
      </main>
      
      <footer className="border-t border-border mt-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkle size={16} weight="fill" className="text-primary" />
              <span>Built with <strong className="text-foreground">GitHub Spark</strong></span>
            </div>
            <p>
              Explore the possibilities of building without boundaries
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
