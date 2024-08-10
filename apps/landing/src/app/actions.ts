'use server'
import { db, invites, NewInvite } from '@stewardly/database'

type PrevData = {
  data: NewInvite | undefined
  error: boolean
}

export const insertInviteRecord = async (_: PrevData, formData: FormData) => {
  const email = formData.get('email') as string

  try {
    const [invite] = await db
      .insert(invites)
      .values({ email })
      .returning()
      .execute()

    return {
      data: invite,
      error: false,
    }
  } catch (e) {
    return {
      data: undefined,
      error: true,
    }
  }
}
