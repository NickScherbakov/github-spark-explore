import { useState } from 'react'
import { Sparkle, ArrowRight, Info } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from 'sonner'

export function LLMPlayground() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt')
      return
    }

    setIsLoading(true)
    setResponse('')

    try {
      const llmPrompt = window.spark.llmPrompt([prompt], prompt)
      const result = await window.spark.llm(llmPrompt, 'gpt-4o-mini')
      setResponse(result)
      toast.success('Response generated!')
    } catch (error) {
      toast.error('Failed to generate response. Please try again.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      handleGenerate()
    }
  }

  return (
    <div className="scroll-mt-20">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-3">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/5">
            <Sparkle size={28} weight="duotone" className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            LLM Playground
          </h2>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Try the built-in AI capabilities with a live example
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="p-8 border border-border/60 bg-card/50 backdrop-blur-sm shadow-lg shadow-black/5">
          <div className="space-y-6">
            <div>
              <label htmlFor="prompt-input" className="text-sm font-semibold mb-3 block flex items-center gap-2">
                Your Prompt
                <Badge variant="secondary" className="text-xs font-normal">Input</Badge>
              </label>
              <Textarea
                id="prompt-input"
                placeholder="Ask me anything... Try: 'Write a haiku about coding' or 'Explain React hooks'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[240px] resize-none text-base border-border/60 bg-background/50"
              />
              <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5">
                <kbd className="px-2 py-1 text-xs bg-muted/80 border border-border/60 rounded-md font-medium">⌘</kbd>
                <span>+</span>
                <kbd className="px-2 py-1 text-xs bg-muted/80 border border-border/60 rounded-md font-medium">Enter</kbd>
                <span className="ml-1">to generate</span>
              </p>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  Generate Response
                  <ArrowRight className="ml-2" weight="bold" />
                </>
              )}
            </Button>
          </div>
        </Card>

        <Card className="p-8 border border-border/60 bg-card/50 backdrop-blur-sm shadow-lg shadow-black/5">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold flex items-center gap-2">
                AI Response
                <Badge variant="secondary" className="text-xs font-normal">Output</Badge>
              </label>
              {response && (
                <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                  GPT-4o Mini
                </Badge>
              )}
            </div>

            <ScrollArea className="h-[280px] rounded-2xl border border-border/60 bg-muted/30 p-6">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-3">
                    <div className="w-10 h-10 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
                    <p className="text-sm text-muted-foreground font-medium">Thinking...</p>
                  </div>
                </div>
              ) : response ? (
                <div className="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90">
                  {response}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  Your AI response will appear here
                </div>
              )}
            </ScrollArea>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/[0.03] to-accent/[0.02] border border-primary/20 shadow-md">
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
            <Info className="text-primary" size={20} weight="duotone" />
          </div>
          <div className="text-sm space-y-1.5">
            <p className="font-semibold text-foreground">How it works</p>
            <p className="text-muted-foreground leading-relaxed">
              This demo uses <code className="text-xs bg-background/60 px-2 py-1 rounded-md border border-border/40 font-mono text-primary">window.spark.llm()</code> to call AI models directly. 
              No API keys needed — it's built right into the Spark runtime.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
