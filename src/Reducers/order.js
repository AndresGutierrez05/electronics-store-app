const order = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        return {
          order : {
            customerID : action.customerID,
            totalAmount : action.totalAmount,
            orderProducts : action.products
          }
        }
      default:
        return state
    }
}

export default order