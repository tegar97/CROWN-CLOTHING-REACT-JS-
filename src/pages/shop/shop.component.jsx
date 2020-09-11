import React,{useEffect} from 'react'
import {Route } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux'
import {fetchCollectionsStart} from './../../redux/collections/shop.action'
import {selectIsCollectionIsFetching,selectIsLoaded} from './../../redux/collections/shop.selectors'

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview-container'

import CollectionPageContainer from './../collection/collection.container'

const ShopPage = ({fetchCollectionsStart,match}) => {
    useEffect(() => {
        fetchCollectionsStart()
    },[fetchCollectionsStart])
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`}  component={CollectionPageContainer} />
         </div>
      )

  }
        
    

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionIsFetching,
    selectIsLoaded : selectIsLoaded
})
const mapDispatchProps = dispatch => ({
    fetchCollectionsStart : () =>  dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchProps)(ShopPage)