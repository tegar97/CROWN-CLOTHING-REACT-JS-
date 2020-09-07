import {ShopActionTypes} from './shop.types'

export const UpdateCollection = collectionMaps => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload : collectionMaps
})