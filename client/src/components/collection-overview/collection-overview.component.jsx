import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from './../../redux/collections/shop.selectors'
import CollectionPreview from './../collection_Preview/collection-preview.component'

import {CollectionsOverviewContainer} from './collection-overview.styles'
const CollectionsOverview = ({collection}) => {
    return (
        <CollectionsOverviewContainer >
            {
                collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview  key={id} {...otherCollectionProps} />

                ))
            }
         </CollectionsOverviewContainer>

    )
        
    
}
const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(CollectionsOverview)