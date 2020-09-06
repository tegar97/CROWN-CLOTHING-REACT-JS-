import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollections} from './../../redux/collections/shop.selectors'
import CollectionPreview from './../../pages/collection_Preview/collection-preview.component'

const CollectionsOverview = ({collection}) => {
    return (
        <div className="collection-oveview">
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
 
export default connect(mapStateToProps)(CollectionsOverview)