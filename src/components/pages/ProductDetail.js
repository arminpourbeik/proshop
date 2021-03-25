import { Layout } from 'components/common'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()

  return (
    <Layout>
      <h2>{id}</h2>
    </Layout>
  )
}
