export const addOrder = (order) => {
  return {
    type: 'ADD_ORDER',
    order
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export const removeProduct = (productID) => {
  return {
    type: 'REMOVE_PRODUCT',
    productID
  }
}

export const changeQuantity = (productID, quantity) => {
    return {
      type: 'CHANGE_QUANTITY',
      productID,
      quantity
    }
}