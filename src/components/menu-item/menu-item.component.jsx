import React from 'react'


import './menu-item.styles.scss'

const menuItem = ({title,imageUrl,size}) =>  (
    <div  className={`${size} menu-item`}>
      <div className="background-image" style={{backgroundImage : `url(${imageUrl})`}} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <h1 className="subtitle">Shop Now</h1>
            </div>
 
    </div>

)


export default menuItem