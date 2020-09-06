import styled from 'styled-components'
import {ReactComponent as ShoppingCart} from './../../assets/shopping-bag.svg'
export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`
export const ShoppingCarticon = styled(ShoppingCart)`
    width: 24px;
    height: 24px;

`

export const ItemCount = styled.span`
    font-weight: bold;
    position: absolute;
    font-size: 10px;
    bottom: 12px;

`