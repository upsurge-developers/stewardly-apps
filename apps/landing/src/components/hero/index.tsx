'use client'
import React, { useActionState, useEffect } from 'react'
import Image from 'next/image'

import { insertInviteRecord } from '@/app/actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'

const Hero: React.FC<object> = () => {
  const [data, action, pending] = useActionState(insertInviteRecord, null)

  const { toast } = useToast()

  useEffect(() => {
    if (data?.error) {
      toast({
        title: 'Uh Oh!',
        description: 'Sorry, something went wrong. Please try again.',
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Success!',
        description: 'You have been added to the waitlist.',
        variant: 'success',
      })
    }
  }, [data?.error, toast])

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Pulsing gradient blob */}
      <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Stewardly Kenya
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              The digital lamp on the hill
            </p>
            <form className="space-y-4" action={action}>
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
                name="email"
              />
              <Button
                variant="success"
                type="submit"
                className="font-semibold transition duration-300 ease-in-out"
                disabled={pending}
              >
                {"I'm Interested"}
              </Button>
            </form>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-[335px] h-[750px]">
              <Image
                src="/background.svg"
                alt="Hero"
                className="rounded-[3rem] object-cover object-center"
                height={335}
                width={750}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
