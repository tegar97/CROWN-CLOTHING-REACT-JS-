import {createSelector} from 'reselect'

const selectCollection = state => state.shop


export const selectCollections = createSelector(
    [selectCollection],
    shop => shop.collections
)