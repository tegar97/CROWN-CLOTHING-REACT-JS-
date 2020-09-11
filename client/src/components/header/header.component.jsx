import React from 'react'
//router dom

///redux
import {connect} from 'react-redux'
import {SignoutStart} from '../../redux/user/user.action'
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

const Header = ({currentUser,hidden,cartItem,SignoutStart}) =>  (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => SignoutStart()}>
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
const mapDispatchToProps = (dispatch) => ({
    SignoutStart : () => dispatch(SignoutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)