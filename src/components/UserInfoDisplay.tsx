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
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-bold">
          User Context
        </h3>
        <p className="text-muted-foreground">
          Access authenticated user information from GitHub
        </p>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <div className="p-6 border border-border bg-card">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Skeleton className="w-24 h-24 rounded-none flex-shrink-0" />
              <div className="flex-1 space-y-4 text-center md:text-left w-full">
                <Skeleton className="h-8 w-48 mx-auto md:mx-0" />
                <Skeleton className="h-4 w-64 mx-auto md:mx-0" />
                <Skeleton className="h-4 w-56 mx-auto md:mx-0" />
              </div>
            </div>
          </div>
        ) : user ? (
          <div className="p-6 border border-border bg-card">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24 border border-border rounded-none">
                <AvatarImage src={user.avatarUrl} alt={user.login} />
                <AvatarFallback className="text-2xl bg-muted text-foreground font-bold rounded-none">
                  {user.login.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <h3 className="text-2xl font-bold">{user.login}</h3>
                  {user.isOwner && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 font-bold">
                      OWNER
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-sm font-mono">
                  <div className="flex items-center gap-3 justify-center md:justify-start text-muted-foreground">
                    <Envelope size={16} />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start text-muted-foreground">
                    <IdentificationCard size={16} />
                    <span>ID: {user.id}</span>
                  </div>
                </div>

                {user.isOwner && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      As the owner, you have full access to manage this Spark application.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center border border-border bg-card">
            <User size={40} className="mx-auto text-muted-foreground/50 mb-4" weight="duotone" />
            <p className="text-muted-foreground font-medium">Failed to load user information</p>
          </div>
        )}

        <div className="p-4 border border-primary/20 bg-primary/5">
          <div className="flex gap-4">
            <div className="text-sm space-y-1">
              <p className="font-bold">How it works</p>
              <p className="text-muted-foreground">
                This demo uses <code className="text-xs bg-background px-1 border border-border font-mono">window.spark.user()</code> to fetch authenticated user data. 
                Build user-specific features or restrict access based on ownership status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
