import React from 'react'
//router dom
import {Link} from 'react-router-dom'

//firebase
import {auth} from './../../firebase/firebase.utils'
//redux
import {connect} from 'react-redux'
//reselect
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './../../redux/user/user.selectors'
import {selectCartHidden} from './../../redux/cart/cart.selectors'
//asset
import {ReactComponent as Logo} from '../../assets/logo.svg'

import './header.styles.scss'
import CartIcon from '../cart/cart.componenent'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser,hidden,cartItem}) =>  (
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

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden,
})

export default connect(mapStateToProps)(Header)