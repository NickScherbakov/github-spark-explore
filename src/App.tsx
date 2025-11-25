import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeatureGrid } from '@/components/FeatureGrid'
import { LLMPlayground } from '@/components/LLMPlayground'
import { KVStorageDemo } from '@/components/KVStorageDemo'
import { UserInfoDisplay } from '@/components/UserInfoDisplay'
import { CodeExamples } from '@/components/CodeExamples'
import { Toaster } from '@/components/ui/sonner'
import { Sparkle } from '@phosphor-icons/react'

function AnimatedSection({ 
  children, 
  id, 
  className = '' 
}: { 
  children: React.ReactNode
  id?: string
  className?: string 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState<string>('')

  const handleFeatureClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Toaster />
      <Header />
      
      <Hero />
      
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <AnimatedSection>
          <FeatureGrid onFeatureClick={handleFeatureClick} />
        </AnimatedSection>
        
        <AnimatedSection id="llm" className="pt-12 border-t border-border scroll-mt-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold">LLM Playground</h2>
            <p className="text-muted-foreground text-lg">Try the built-in AI capabilities with a live example</p>
          </div>
          <LLMPlayground />
        </AnimatedSection>
        
        <AnimatedSection id="kv-storage" className="pt-12 border-t border-border scroll-mt-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold">KV Storage</h2>
            <p className="text-muted-foreground text-lg">Persistent storage that works like React state</p>
          </div>
          <KVStorageDemo />
        </AnimatedSection>
        
        <AnimatedSection id="user" className="pt-12 border-t border-border scroll-mt-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold">User Info</h2>
            <p className="text-muted-foreground text-lg">Access authenticated user information from GitHub</p>
          </div>
          <UserInfoDisplay />
        </AnimatedSection>
        
        <AnimatedSection id="examples" className="pt-12 border-t border-border scroll-mt-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold">Code Examples</h2>
            <p className="text-muted-foreground text-lg">Copy-paste ready code snippets to quickly integrate Spark features</p>
          </div>
          <CodeExamples />
        </AnimatedSection>
      </main>
      
      <footer className="border-t border-border mt-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-muted text-muted-foreground rounded-md">
                <Sparkle size={16} weight="fill" />
              </div>
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
