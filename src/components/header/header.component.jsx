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

//component
import CartIcon from '../cart/cart.componenent'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


//style
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
  } from './header.styles';

const Header = ({currentUser,hidden,cartItem}) =>  (
    <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
   
    
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden,
})

export default connect(mapStateToProps)(Header)