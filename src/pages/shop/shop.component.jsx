import React from 'react'
import {Route } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'
import {fetchCollectionsStart} from './../../redux/collections/shop.action'
import {selectIsCollectionIsFetching,selectIsLoaded} from './../../redux/collections/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.components'

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview-container'
import CollectionPage from '../collection/collection.component'
import CollectionPageContainer from './../collection/collection.container'

const CollectionPageWithSpinners = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
            
    }
  render() {

        const {match,isCollectionFetching,selectIsLoaded} = this.props
      return (
          <div className="shop-page">
             <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
             <Route path={`${match.path}/:collectionId`}  component={CollectionPageContainer} />
           </div>
  
      )

  }
        
    
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionIsFetching,
    selectIsLoaded : selectIsLoaded
})
const mapDispatchProps = dispatch => ({
    fetchCollectionsStart : () =>  dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchProps)(ShopPage)