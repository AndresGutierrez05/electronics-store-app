import { gql } from '@apollo/client'

export default gql`
query {
  products {
    productID
    productName
    price
    stockQuantity
    descripcion
    imageUrl
    categories
    {
      categoryName
    }
  }
}
`