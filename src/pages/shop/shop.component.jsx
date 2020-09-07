import React from 'react'
import {Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {updateCollections} from './../../redux/collections/shop.action'
import WithSpinner from '../../components/with-spinner/with-spinner.components'

const CollectionsOverviewWithSpinners = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinners = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }
   
    unsubsribeFromSnapshot = null
    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

         this.unsubsribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap)
            this.setState({
                loading : false
            })
        })
            
    }
  render() {

        const {match} = this.props
        const {loading} = this.state
      return (
          <div className="shop-page">
             <Route exact path={`${match.path}`}  render={(props) => <CollectionsOverviewWithSpinners isLoading={loading} {...props}/>} />
             <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinners isLoading={loading} {...props} />}/>
           </div>
  
      )

  }
        
    
}
const mapDispatchProps = dispatch => ({
    updateCollections : collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchProps)(ShopPage)