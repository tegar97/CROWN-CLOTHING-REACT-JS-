import React from 'react'
import {withRouter} from 'react-router-dom'

import './menu-item.styles.scss'

const menuItem = ({title,imageUrl,size,history,linkUrl,match}) =>  (
    <div  className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{backgroundImage : `url(${imageUrl})`}} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
            {console.log(match.url)}
 
    </div>

)


export default withRouter(menuItem)