import React from 'react'
import {withRouter} from 'react-router-dom'

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';

const menuItem = ({title,imageUrl,size,history,linkUrl,match}) =>  (
    <MenuItemContainer   size={size}  onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer  className='background-image' imageUrl={imageUrl}  />
            <ContentContainer  className="content">
                <ContentTitle >{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle >Shop Now</ContentSubtitle>
            </ContentContainer>
 
    </MenuItemContainer>

)


export default withRouter(menuItem)