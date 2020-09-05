import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from './../../redux/collections/shop.selectors'
import CollectionPreview from './../collection_Preview/collection-preview'
const ShopPage = ({collection}) => {
    return (
        <div className="shop-page">
            {
                collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview  key={id} {...otherCollectionProps} />

                ))
            }
         </div>

    )
        
    
}
const mapStateToProps = createStructuredSelector({
    collection: selectCollections
})
 
export default connect(mapStateToProps)(ShopPage)