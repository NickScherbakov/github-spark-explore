import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
    <div className="min-h-screen bg-background">
      <Toaster />
      
      <Hero />
      
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-24">
        <AnimatedSection>
          <FeatureGrid onFeatureClick={handleFeatureClick} />
        </AnimatedSection>
        
        <AnimatedSection id="llm" className="pt-12 border-t border-border scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">LLM Playground</h2>
          <LLMPlayground />
        </AnimatedSection>
        
        <AnimatedSection id="kv-storage" className="pt-12 border-t border-border scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">KV Storage</h2>
          <KVStorageDemo />
        </AnimatedSection>
        
        <AnimatedSection id="user" className="pt-12 border-t border-border scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">User Info</h2>
          <UserInfoDisplay />
        </AnimatedSection>
        
        <AnimatedSection id="examples" className="pt-12 border-t border-border scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
          <CodeExamples />
        </AnimatedSection>
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
