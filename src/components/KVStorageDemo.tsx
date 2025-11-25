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
      <div className="space-y-6">
        <div className="p-6 border border-border bg-card rounded-lg shadow-sm">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                id="note-input"
                placeholder="Type a note... Try refreshing the page after adding notes!"
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 h-10 text-base border-border bg-background"
              />
              <Button 
                onClick={addNote} 
                size="lg" 
                className="h-10 px-8 font-bold"
              >
                <Plus className="mr-2" weight="bold" />
                Add Note
              </Button>
            </div>

            {notesList.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <p className="text-sm font-bold text-foreground">
                    Your Notes ({notesList.length})
                  </p>
                  <span className="text-xs border border-accent/30 px-2 py-1 bg-accent/10 text-accent rounded">
                    Persisted
                  </span>
                </div>

                <div className="space-y-3">
                  {notesList.map((note) => (
                    <div
                      key={note.id}
                      className="group p-4 bg-muted/50 border border-border rounded-lg hover:border-accent/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-1">
                          <p className="text-sm leading-relaxed text-foreground">{note.text}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(note.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteNote(note.id)}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash size={16} weight="bold" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-border bg-muted/20 rounded-lg">
                <Database size={40} className="mx-auto text-muted-foreground/50 mb-4" weight="duotone" />
                <p className="text-muted-foreground font-medium">No notes yet. Add your first note above!</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border border-accent/20 bg-accent/5 rounded-lg">
          <div className="flex gap-4">
            <div className="text-sm space-y-1">
              <p className="font-bold flex items-center gap-2">
                <Info size={16} weight="fill" className="text-accent" />
                How it works
              </p>
              <p className="text-muted-foreground">
                This demo uses <code className="text-xs bg-background px-1.5 py-0.5 rounded border border-border font-mono">useKV()</code> hook for reactive persistence. 
                Your notes survive page refreshes automatically — no backend required!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
