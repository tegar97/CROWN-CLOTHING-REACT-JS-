import React from 'react'
import {Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {UpdateCollection} from './../../redux/collections/shop.action'
class ShopPage extends React.Component {
    unsubscribeFromSnapsot = null
    componentDidMount() {
        const {UpdateCollection} = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap =convertCollectionsSnapshotToMap(snapshot)
            UpdateCollection(collectionMap)
        })
            
    }
  render() {

        const {match} = this.props
      return (
          <div className="shop-page">
             <Route exact path={`${match.path}`}  component={CollectionsOverview} />
             <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
           </div>
  
      )

  }
        
    
}
const mapDispatchProps = dispatch => ({
    UpdateCollection : collectionMap => (UpdateCollection(collectionMap))
})

export default connect(null,mapDispatchProps)(ShopPage)