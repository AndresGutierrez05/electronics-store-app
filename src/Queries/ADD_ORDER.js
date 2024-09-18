import { gql } from '@apollo/client'

export default gql`
    mutation createOrder($customerID : Int!, $totalAmount : Decimal!, $orderProducts : [OrderProductTypeInput!]!){
        createOrder(
                orderInfo: {
                    customerID : $customerID
                    totalAmount : $totalAmount
                    orderProducts : $orderProducts
        })
    }
`