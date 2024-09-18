import { combineReducers } from 'redux'
import order from './order'
import products from './product'

const ElectronicStoreApp = combineReducers({
    order,
    products
})

export default ElectronicStoreApp