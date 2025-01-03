import { Button } from '@stewardly/ui'
import { auth } from '@stewardly/auth'

export default function Home() {
  console.log({ auth })
  return <Button variant="default">Hello</Button>
}
