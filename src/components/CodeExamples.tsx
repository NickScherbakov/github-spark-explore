import { useState } from 'react'
import { Code, Copy, Check, Info } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from 'sonner'

const codeExamples = {
  llm: {
    title: 'LLM Integration',
    code: `import { useState } from 'react'

function AIComponent() {
  const [result, setResult] = useState('')

  const callAI = async () => {
    const promptText = 'Explain React hooks'
    const prompt = window.spark.llmPrompt([promptText], promptText)
    const response = await window.spark.llm(prompt, 'gpt-4o-mini')
    setResult(response)
  }

  return (
    <button onClick={callAI}>
      Ask AI
    </button>
  )
}`
  },
  kvHook: {
    title: 'KV Storage (Hook)',
    code: `import { useKV } from '@github/spark/hooks'

function TodoList() {
  const [todos, setTodos] = useKV('todos', [])

  const addTodo = (text: string) => {
    setTodos((current) => [
      ...(current || []),
      { id: Date.now(), text, done: false }
    ])
  }

  const toggleTodo = (id: number) => {
    setTodos((current) =>
      (current || []).map((todo) =>
        todo.id === id 
          ? { ...todo, done: !todo.done }
          : todo
      )
    )
  }

  return (
    <div>
      {(todos || []).map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
        </div>
      ))}
    </div>
  )
}`
  },
  kvDirect: {
    title: 'KV Storage (Direct API)',
    code: `async function saveUserPreference() {
  await window.spark.kv.set('theme', 'dark')
  
  const theme = await window.spark.kv.get('theme')
  console.log(theme)
  
  const allKeys = await window.spark.kv.keys()
  console.log(allKeys)
  
  await window.spark.kv.delete('theme')
}`
  },
  user: {
    title: 'User Context',
    code: `import { useEffect, useState } from 'react'

function UserProfile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await window.spark.user()
      setUser(userData)
    }
    fetchUser()
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <img src={user.avatarUrl} alt={user.login} />
      <h2>{user.login}</h2>
      <p>{user.email}</p>
      {user.isOwner && <span>Owner Access</span>}
    </div>
  )
}`
  },
  jsonMode: {
    title: 'LLM JSON Mode',
    code: `async function generateStructuredData() {
  const promptText = \`
    Generate 5 sample products. 
    Return as JSON with a "products" property 
    containing an array of objects with: 
    id, name, price, category
  \`
  
  const prompt = window.spark.llmPrompt(
    [promptText], 
    promptText
  )
  
  const response = await window.spark.llm(
    prompt, 
    'gpt-4o-mini', 
    true
  )
  
  const data = JSON.parse(response)
  console.log(data.products)
}`
  }
}

export function CodeExamples() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const copyCode = (code: string, tab: string) => {
    navigator.clipboard.writeText(code)
    setCopiedTab(tab)
    toast.success('Copied to clipboard!')
    setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <div className="scroll-mt-20">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
            <Code size={24} weight="duotone" className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Code Examples
          </h2>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Copy-paste ready snippets to use in your Spark apps
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-8 border-2 border-border/50 shadow-lg">
          <Tabs defaultValue="llm" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 h-auto gap-2 bg-muted/50 p-2">
              <TabsTrigger value="llm" className="font-semibold">LLM</TabsTrigger>
              <TabsTrigger value="kvHook" className="font-semibold">KV Hook</TabsTrigger>
              <TabsTrigger value="kvDirect" className="font-semibold">KV Direct</TabsTrigger>
              <TabsTrigger value="user" className="font-semibold">User</TabsTrigger>
              <TabsTrigger value="jsonMode" className="font-semibold">JSON Mode</TabsTrigger>
            </TabsList>

            {Object.entries(codeExamples).map(([key, example]) => (
              <TabsContent key={key} value={key} className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b-2 border-border/50">
                  <h3 className="text-xl font-bold">{example.title}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(example.code, key)}
                    className="font-semibold border-2"
                  >
                    {copiedTab === key ? (
                      <>
                        <Check className="mr-2" size={16} weight="bold" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2" size={16} weight="duotone" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>

                <ScrollArea className="h-[440px] rounded-xl border-2 border-border/50 bg-gradient-to-br from-secondary/40 to-secondary/20">
                  <pre className="p-6 text-sm leading-relaxed">
                    <code className="text-secondary-foreground font-mono">
                      {example.code}
                    </code>
                  </pre>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 shadow-lg">
          <div className="flex gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 flex-shrink-0">
              <Info className="text-accent" size={20} weight="duotone" />
            </div>
            <div className="text-sm space-y-1.5">
              <p className="font-semibold text-foreground">Ready to use</p>
              <p className="text-muted-foreground leading-relaxed">
                All examples are production-ready and follow TypeScript best practices. 
                Copy any snippet and use it directly in your Spark application.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
