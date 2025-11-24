import { useEffect, useState } from 'react'
import { User, Crown, Envelope, IdentificationCard } from '@phosphor-icons/react'
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
        const userData = await spark.user()
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
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <User size={24} weight="duotone" className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            User Context
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          Access authenticated user information from GitHub
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {isLoading ? (
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Skeleton className="w-24 h-24 rounded-full" />
              <div className="flex-1 space-y-3 text-center md:text-left w-full">
                <Skeleton className="h-8 w-48 mx-auto md:mx-0" />
                <Skeleton className="h-4 w-64 mx-auto md:mx-0" />
                <Skeleton className="h-4 w-56 mx-auto md:mx-0" />
              </div>
            </div>
          </Card>
        ) : user ? (
          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24 border-2 border-border">
                <AvatarImage src={user.avatarUrl} alt={user.login} />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {user.login.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-3 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <h3 className="text-2xl font-semibold">{user.login}</h3>
                  {user.isOwner && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Crown size={14} className="mr-1" weight="fill" />
                      Owner
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Envelope size={16} weight="duotone" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <IdentificationCard size={16} weight="duotone" />
                    <span>User ID: {user.id}</span>
                  </div>
                </div>

                {user.isOwner && (
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      As the owner, you have full access to manage this Spark application.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ) : (
          <Card className="p-8 text-center">
            <User size={48} className="mx-auto text-muted-foreground mb-3" weight="duotone" />
            <p className="text-muted-foreground">Failed to load user information</p>
          </Card>
        )}

        <Card className="mt-6 p-4 bg-muted/30 border-accent/20">
          <div className="flex gap-3">
            <User className="text-accent flex-shrink-0 mt-0.5" size={20} weight="duotone" />
            <div className="text-sm">
              <p className="font-medium mb-1">How it works</p>
              <p className="text-muted-foreground">
                This demo uses <code className="text-xs bg-background px-1.5 py-0.5 rounded">spark.user()</code> to fetch authenticated user data. 
                Build user-specific features or restrict access based on ownership status.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
