const products = (state = [], action) => {
    let newState = [];
    switch (action.type) {
        case 'ADD_PRODUCT':
            newState = [
                    ...state.filter(s => s.productID !== action.product.productID),
                    {...action.product, totalAmount : action.product.quantity * action.product.price}
                ];
            break;
        case 'REMOVE_PRODUCT':
            newState = state.filter(s => s.productID !== action.productID);
            break;
        case 'CHANGE_QUANTITY':
            newState = [...state.filter(s => s.productID != action.productID),
                    state.filter(s => s.productID == action.productID)
                    .map(s => ({...s, quantity : action.quantity, totalAmount : action.quantity * s.price}))[0]
                ];
            break;
        default:
            newState = state;
    }
    newState = newState.sort((a, b) => a.productID - b.productID);
    return newState;
}

export default products