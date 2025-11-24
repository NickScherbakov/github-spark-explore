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
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-bold">
          Code Examples
        </h3>
        <p className="text-muted-foreground">
          Copy-paste ready snippets to use in your Spark apps
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 border border-border bg-card rounded-lg shadow-sm">
          <Tabs defaultValue="llm" className="w-full">
            <TabsList className="flex flex-wrap w-full mb-6 h-auto gap-2 bg-muted/50 p-1 rounded-lg">
              <TabsTrigger value="llm" className="font-bold rounded-md data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm px-4 py-2">LLM</TabsTrigger>
              <TabsTrigger value="kvHook" className="font-bold rounded-md data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm px-4 py-2">KV Hook</TabsTrigger>
              <TabsTrigger value="kvDirect" className="font-bold rounded-md data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm px-4 py-2">KV Direct</TabsTrigger>
              <TabsTrigger value="user" className="font-bold rounded-md data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm px-4 py-2">User</TabsTrigger>
              <TabsTrigger value="jsonMode" className="font-bold rounded-md data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm px-4 py-2">JSON Mode</TabsTrigger>
            </TabsList>

            {Object.entries(codeExamples).map(([key, example]) => (
              <TabsContent key={key} value={key} className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="text-lg font-bold">{example.title}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(example.code, key)}
                    className="font-bold border-border"
                  >
                    {copiedTab === key ? (
                      <>
                        <Check className="mr-2" size={16} weight="bold" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2" size={16} weight="bold" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>

                <div className="h-[440px] border border-border bg-secondary/5 rounded-lg overflow-auto">
                  <pre className="p-4 text-sm leading-relaxed">
                    <code className="text-foreground font-mono">
                      {example.code}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="p-4 border border-accent/20 bg-accent/5 rounded-lg">
          <div className="flex gap-4">
            <div className="text-sm space-y-1">
              <p className="font-bold flex items-center gap-2">
                <Info size={16} weight="fill" className="text-accent" />
                Ready to use
              </p>
              <p className="text-muted-foreground">
                All examples are production-ready and follow TypeScript best practices. 
                Copy any snippet and use it directly in your Spark application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
