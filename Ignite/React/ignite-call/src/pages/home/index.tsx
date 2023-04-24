import { Heading } from '@ignite-ui/react'
import { Container, Hero, Preview } from './style'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1">Agendamento descomplicado</Heading>
      </Hero>
      <Preview></Preview>
    </Container>
  )
}
