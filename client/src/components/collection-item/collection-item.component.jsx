import React from 'react'


//redux
import {connect} from 'react-redux';
import {addItem} from './../../redux/cart/cart.action'
import {CollectionItemContainer,AddButton,BackgroundImage,CollectionFooterContainer,NameContainer,PriceContainer} from './collection-item.styles'
const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return (
        <CollectionItemContainer >
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer className='collection-footer'>
                <NameContainer className='name'>{name}</NameContainer>
                <PriceContainer className='price'>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)}>Add to chart</AddButton>  
        </CollectionItemContainer>

    )

}
const mapDispatchProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchProps)(CollectionItem)

 
