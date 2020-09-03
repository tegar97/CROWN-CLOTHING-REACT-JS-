import React from 'react'
//router dom
import {Link} from 'react-router-dom'

//firebase
import {auth} from './../../firebase/firebase.utils'
//redux
import {connect} from 'react-redux'
//asset
import {ReactComponent as Logo} from '../../assets/logo.svg'

import './header.styles.scss'
import CartIcon from '../cart/cart.componenent'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser,hidden}) =>  (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className="logo" />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className='option' to='/contact'>
            CONTACT
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to="/signin">LOGIN</Link>
            }
            <CartIcon />
        </div>
         {
             hidden ? 
             null:
            <CartDropdown/>

         }
    </div>
   
    
)

const mapStateToProps = ({user : {currentUser} ,cart :{hidden}}) => ({
    hidden,
    currentUser
})

export default connect(mapStateToProps)(Header)