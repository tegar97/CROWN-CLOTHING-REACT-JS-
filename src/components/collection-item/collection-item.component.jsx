import React from 'react'

import './collection-item.style.scss'
import CustomButton from '../button/custom-button.component'

//redux
import {connect} from 'react-redux';
import {addItem} from './../../redux/cart/cart.action'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage : `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to chart</CustomButton>  
        </div>

    )

}
const mapDispatchProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchProps)(CollectionItem)

 
