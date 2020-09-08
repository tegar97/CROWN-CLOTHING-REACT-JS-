import React from 'react'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import {selectIsCollectionIsFetching} from './../../redux/collections/shop.selectors'
import WithSpinner from './../with-spinner/with-spinner.components'
import CollectionsOverview from './collection-overview.component'
import { connect } from 'react-redux'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionIsFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;