import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'
import {selectIsLoaded} from './../../redux/collections/shop.selectors'
import WithSpinner from './../../components/with-spinner/with-spinner.components'
import CollectionPage from './collection.component'
import { connect } from 'react-redux'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsLoaded(state)   
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;