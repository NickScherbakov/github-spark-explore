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
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-bold">
          LLM Playground
        </h3>
        <p className="text-muted-foreground">
          Try the built-in AI capabilities with a live example
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 border border-border bg-card rounded-lg shadow-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="prompt-input" className="text-sm font-bold mb-2 block">
                Your Prompt
              </label>
              <Textarea
                id="prompt-input"
                placeholder="Ask me anything... Try: 'Write a haiku about coding' or 'Explain React hooks'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[240px] resize-none text-base border-border bg-background font-mono"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-xs">Cmd+Enter</kbd> to generate
              </p>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="w-full h-10 text-base font-bold"
              size="lg"
            >
              {isLoading ? 'Generating...' : 'Generate Response'}
            </Button>
          </div>
        </div>

        <div className="p-6 border border-border bg-card rounded-lg shadow-sm">
          <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold">
                AI Response
              </label>
              {response && (
                <span className="text-xs border border-primary/30 px-2 py-1 bg-primary/10 text-primary rounded">
                  GPT-4o Mini
                </span>
              )}
            </div>

            <div className="flex-1 border border-border bg-muted/50 p-4 rounded-lg overflow-auto min-h-[240px]">
              {isLoading ? (
                <div className="text-sm text-muted-foreground">Thinking...</div>
              ) : response ? (
                <div className="text-sm leading-relaxed whitespace-pre-wrap font-mono">
                  {response}
                </div>
              ) : (
                <div className="text-muted-foreground text-sm italic">
                  Your AI response will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
        <div className="flex gap-4">
          <div className="text-sm space-y-1">
            <p className="font-bold flex items-center gap-2">
              <Info size={16} weight="fill" className="text-primary" />
              How it works
            </p>
            <p className="text-muted-foreground">
              This demo uses <code className="text-xs bg-background px-1.5 py-0.5 rounded border border-border font-mono">window.spark.llm()</code> to call AI models directly. 
              No API keys needed — it's built right into the Spark runtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
