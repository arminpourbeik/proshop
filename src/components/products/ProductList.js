import { Card } from 'semantic-ui-react'
import { Product } from './Product'

export function ProductList({ products }) {
  return (
    <Card.Group stackable doubling itemsPerRow={4}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </Card.Group>
  )
}
