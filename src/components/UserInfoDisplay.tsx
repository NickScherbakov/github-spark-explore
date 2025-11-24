import { useEffect, useState } from 'react'
import { User, Crown, Envelope, IdentificationCard, Info } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

interface UserInfo {
  avatarUrl: string
  email: string
  id: number
  isOwner: boolean
  login: string
}

export function UserInfoDisplay() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await window.spark.user()
        setUser(userData)
      } catch (error) {
        console.error('Failed to fetch user:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="scroll-mt-20">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
            <User size={24} weight="duotone" className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            User Context
          </h2>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Access authenticated user information from GitHub
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {isLoading ? (
          <Card className="p-10 border-2 border-border/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Skeleton className="w-28 h-28 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-4 text-center md:text-left w-full">
                <Skeleton className="h-9 w-52 mx-auto md:mx-0" />
                <Skeleton className="h-5 w-64 mx-auto md:mx-0" />
                <Skeleton className="h-5 w-56 mx-auto md:mx-0" />
              </div>
            </div>
          </Card>
        ) : user ? (
          <Card className="p-10 border-2 border-border/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-28 h-28 border-4 border-border shadow-xl flex-shrink-0">
                <AvatarImage src={user.avatarUrl} alt={user.login} />
                <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                  {user.login.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <h3 className="text-3xl font-bold">{user.login}</h3>
                  {user.isOwner && (
                    <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 shadow-lg shadow-accent/25 px-3 py-1">
                      <Crown size={16} className="mr-1.5" weight="fill" />
                      Owner
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 justify-center md:justify-start text-muted-foreground">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                      <Envelope size={16} weight="duotone" />
                    </div>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start text-muted-foreground">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                      <IdentificationCard size={16} weight="duotone" />
                    </div>
                    <span className="font-medium">User ID: {user.id}</span>
                  </div>
                </div>

                {user.isOwner && (
                  <div className="pt-4 border-t-2 border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      As the owner, you have full access to manage this Spark application.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ) : (
          <Card className="p-10 text-center border-2 border-border/50 shadow-lg">
            <User size={56} className="mx-auto text-muted-foreground mb-4" weight="duotone" />
            <p className="text-muted-foreground font-medium">Failed to load user information</p>
          </Card>
        )}

        <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 shadow-lg">
          <div className="flex gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 flex-shrink-0">
              <Info className="text-accent" size={20} weight="duotone" />
            </div>
            <div className="text-sm space-y-1.5">
              <p className="font-semibold text-foreground">How it works</p>
              <p className="text-muted-foreground leading-relaxed">
                This demo uses <code className="text-xs bg-background/80 px-2 py-1 rounded border border-border font-mono text-primary">window.spark.user()</code> to fetch authenticated user data. 
                Build user-specific features or restrict access based on ownership status.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
