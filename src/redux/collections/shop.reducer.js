import SHOP_DATA from './shop.data'
import {ShopActionTypes} from './shop.types'

const INITIAL_STATE = {
    collections : SHOP_DATA
      
      
}

const collectionReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case(ShopActionTypes.UPDATE_COLLLECTION):
            return {
                ...state,
                collections : action.payload
            }
        default:
            return state
    }
}
export default collectionReducer