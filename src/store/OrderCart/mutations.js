import {
  REQUEST_ADD_CART_LIST_TO_SPRING
} from './mutation-types'

export default {
  [REQUEST_ADD_CART_LIST_TO_SPRING] (state, passingData) {
      state.cartItems = passingData
  }
}