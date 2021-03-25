import { Layout } from 'components/common'
import { ProductList } from 'components/products'
import { Header } from 'semantic-ui-react'

import products from '../../data/products'

export default function Home() {
  return (
    <Layout>
      <Header as='h1'>Latest Products</Header>
      <ProductList products={products} />
    </Layout>
  )
}
