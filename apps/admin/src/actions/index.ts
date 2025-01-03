'use server'
import { redirect } from 'next/navigation'
import { authClient } from '@stewardly/auth'

export const login = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  console.log({ email, password })

  try {
    const res = await authClient.signIn.email({ email, password })
    console.log(res)
    redirect('/')
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const signUp = async (formData: FormData) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  console.log({ email, password })

  try {
    const res = await authClient.signUp.email({ email, password, name })
    redirect('/')
    console.log(res)
  } catch (e) {
    console.error(e)
    throw e
  }
}
