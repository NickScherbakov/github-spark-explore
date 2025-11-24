import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Database, Plus, Trash, Check } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

interface Note {
  id: string
  text: string
  createdAt: number
}

export function KVStorageDemo() {
  const [notes, setNotes] = useKV<Note[]>('spark-demo-notes', [])
  const [newNoteText, setNewNoteText] = useState('')

  const notesList = notes || []

  const addNote = () => {
    if (!newNoteText.trim()) {
      toast.error('Please enter some text')
      return
    }

    const note: Note = {
      id: Date.now().toString(),
      text: newNoteText.trim(),
      createdAt: Date.now()
    }

    setNotes((currentNotes) => [...(currentNotes || []), note])
    setNewNoteText('')
    toast.success('Note saved!')
  }

  const deleteNote = (id: string) => {
    setNotes((currentNotes) => (currentNotes || []).filter((note) => note.id !== id))
    toast.success('Note deleted')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addNote()
    }
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <Database size={24} weight="duotone" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            KV Storage Demo
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          Persistent storage that works like React state
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex gap-3">
              <Input
                id="note-input"
                placeholder="Type a note... Try refreshing the page after adding notes!"
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={addNote} size="lg">
                <Plus className="mr-2" />
                Add
              </Button>
            </div>

            {notesList.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">
                    Your Notes ({notesList.length})
                  </p>
                  <Badge variant="outline" className="text-xs">
                    <Check size={12} className="mr-1" />
                    Persisted
                  </Badge>
                </div>

                <div className="space-y-2">
                  {notesList.map((note) => (
                    <Card
                      key={note.id}
                      className="p-4 bg-muted/30 border-border hover:border-accent/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm flex-1">{note.text}</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteNote(note.id)}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(note.createdAt).toLocaleString()}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                <Database size={48} className="mx-auto text-muted-foreground mb-3" weight="duotone" />
                <p className="text-muted-foreground">No notes yet. Add your first note above!</p>
              </div>
            )}
          </div>
        </Card>

        <Card className="mt-6 p-4 bg-muted/30 border-accent/20">
          <div className="flex gap-3">
            <Database className="text-accent flex-shrink-0 mt-0.5" size={20} weight="duotone" />
            <div className="text-sm">
              <p className="font-medium mb-1">How it works</p>
              <p className="text-muted-foreground">
                This demo uses <code className="text-xs bg-background px-1.5 py-0.5 rounded">useKV()</code> hook for reactive persistence. 
                Your notes survive page refreshes automatically — no backend required!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
