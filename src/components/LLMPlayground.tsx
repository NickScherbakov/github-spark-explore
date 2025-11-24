import { useState } from 'react'
import { Sparkle, ArrowRight } from '@phosphor-icons/react'
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
      const llmPrompt = spark.llmPrompt`${prompt}`
      const result = await spark.llm(llmPrompt, 'gpt-4o-mini')
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
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkle size={24} weight="duotone" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            LLM Playground
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          Try the built-in AI capabilities with a live example
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="prompt-input" className="text-sm font-medium mb-2 block">
                Your Prompt
              </label>
              <Textarea
                id="prompt-input"
                placeholder="Ask me anything... Try: 'Write a haiku about coding' or 'Explain React hooks'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[200px] resize-none"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Press ⌘+Enter or Ctrl+Enter to generate
              </p>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="w-full"
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
                  <ArrowRight className="ml-2" />
                </>
              )}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">AI Response</label>
              {response && (
                <Badge variant="secondary" className="text-xs">
                  GPT-4o Mini
                </Badge>
              )}
            </div>

            <ScrollArea className="h-[240px] rounded-lg border border-border bg-muted/30 p-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              ) : response ? (
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
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

      <Card className="mt-6 p-4 bg-muted/30 border-accent/20">
        <div className="flex gap-3">
          <Sparkle className="text-accent flex-shrink-0 mt-0.5" size={20} weight="duotone" />
          <div className="text-sm">
            <p className="font-medium mb-1">How it works</p>
            <p className="text-muted-foreground">
              This demo uses <code className="text-xs bg-background px-1.5 py-0.5 rounded">spark.llm()</code> to call AI models directly. 
              No API keys needed — it's built right into the Spark runtime.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
