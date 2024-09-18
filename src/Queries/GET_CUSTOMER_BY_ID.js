import { gql } from '@apollo/client'

export default gql`
query {
  customerById(customerID: 1){
    customerID
    firstName
    lastName
    email
  }
}
`