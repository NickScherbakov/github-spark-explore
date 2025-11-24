import { useState } from 'react'
import { Code, Copy, Check } from '@phosphor-icons/react'
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
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <Code size={24} weight="duotone" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Code Examples
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          Copy-paste ready snippets to use in your Spark apps
        </p>
      </div>

      <Card className="p-6">
        <Tabs defaultValue="llm" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6">
            <TabsTrigger value="llm">LLM</TabsTrigger>
            <TabsTrigger value="kvHook">KV Hook</TabsTrigger>
            <TabsTrigger value="kvDirect">KV Direct</TabsTrigger>
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="jsonMode">JSON Mode</TabsTrigger>
          </TabsList>

          {Object.entries(codeExamples).map(([key, example]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyCode(example.code, key)}
                >
                  {copiedTab === key ? (
                    <>
                      <Check className="mr-2" size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={16} />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>

              <ScrollArea className="h-[400px] rounded-lg border border-border bg-secondary/30">
                <pre className="p-4 text-sm">
                  <code className="text-secondary-foreground font-mono">
                    {example.code}
                  </code>
                </pre>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </Card>

      <Card className="mt-6 p-4 bg-muted/30 border-accent/20">
        <div className="flex gap-3">
          <Code className="text-accent flex-shrink-0 mt-0.5" size={20} weight="duotone" />
          <div className="text-sm">
            <p className="font-medium mb-1">Ready to use</p>
            <p className="text-muted-foreground">
              All examples are production-ready and follow TypeScript best practices. 
              Copy any snippet and use it directly in your Spark application.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
