import { Container } from 'semantic-ui-react'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}
