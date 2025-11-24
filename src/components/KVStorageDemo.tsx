import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Database, Plus, Trash, Check, Info } from '@phosphor-icons/react'
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
    <div className="scroll-mt-20">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-3">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/5">
            <Database size={28} weight="duotone" className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            KV Storage Demo
          </h2>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Persistent storage that works like React state
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="p-8 border border-border/60 bg-card/50 backdrop-blur-sm shadow-lg shadow-black/5">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                id="note-input"
                placeholder="Type a note... Try refreshing the page after adding notes!"
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 h-12 text-base border-border/60 bg-background/50"
              />
              <Button 
                onClick={addNote} 
                size="lg" 
                className="h-12 px-8 font-semibold shadow-lg shadow-primary/20 sm:w-auto w-full"
              >
                <Plus className="mr-2" weight="bold" />
                Add Note
              </Button>
            </div>

            {notesList.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <p className="text-sm font-semibold text-foreground">
                    Your Notes ({notesList.length})
                  </p>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                    <Check size={12} weight="bold" className="mr-1" />
                    Persisted
                  </Badge>
                </div>

                <div className="space-y-3">
                  {notesList.map((note) => (
                    <Card
                      key={note.id}
                      className="group p-5 bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-200 hover:shadow-md hover:shadow-black/5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <p className="text-sm leading-relaxed text-foreground">{note.text}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(note.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteNote(note.id)}
                          className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-60 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash size={18} weight="duotone" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-border/60 rounded-2xl bg-muted/20">
                <Database size={56} className="mx-auto text-muted-foreground/50 mb-4" weight="duotone" />
                <p className="text-muted-foreground font-medium">No notes yet. Add your first note above!</p>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-primary/[0.03] to-accent/[0.02] border border-primary/20 shadow-md">
          <div className="flex gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
              <Info className="text-primary" size={20} weight="duotone" />
            </div>
            <div className="text-sm space-y-1.5">
              <p className="font-semibold text-foreground">How it works</p>
              <p className="text-muted-foreground leading-relaxed">
                This demo uses <code className="text-xs bg-background/60 px-2 py-1 rounded-md border border-border/40 font-mono text-primary">useKV()</code> hook for reactive persistence. 
                Your notes survive page refreshes automatically — no backend required!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
