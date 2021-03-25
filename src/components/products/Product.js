import { Card, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export function Product({ product }) {
  return (
    <Card link as={Link} to={`product/${product._id}`}>
      <Image src={product.image} wrapped ui />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          <span>{product.category}</span>
        </Card.Meta>
        <Card.Description>
          <Header as='h3'>$ {product.price}</Header>
          {product.numReviews} reviews
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
