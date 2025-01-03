import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

import { signUp } from '~/actions'
import Link from 'next/link'

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={signUp} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Hey there!</h1>
                <p className="text-balance text-neutral-500 dark:text-neutral-400">
                  Sign Up for your Stewardly account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" variant="success">
                Sign Up
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-neutral-200 dark:after:border-neutral-800">
                <span className="relative z-10 bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <span className="w-full flex items-center justify-center">
                  <SocialIcon
                    className="text-white transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
                    network="google"
                  />
                  <span className="sr-only">Login with Google</span>
                </span>
                <span className="w-full flex items-center justify-center">
                  <SocialIcon
                    className="text-white transform transition-all duration-200 ease-in-out hover:cursor-pointer hover:opacity-70"
                    network="facebook"
                  />
                  <span className="sr-only">Login with Meta</span>
                </span>
              </div>
              <div className="text-center text-sm">
                Have an account?{''}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-neutral-100 md:block dark:bg-neutral-800">
            <Image
              src="https://picsum.photos/seed/pews/383/433"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              height={433}
              width={383}
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-neutral-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-neutral-900 dark:text-neutral-400 dark:hover:[&_a]:text-neutral-50">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>
        {''}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
