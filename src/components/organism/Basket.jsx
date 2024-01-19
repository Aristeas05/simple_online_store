import React, { useState } from "react";
import BasketList from "../molecules/BasketList";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Basket = ({quantity}) => {

    const [list,showList] = useState(false);

    const handleBasketList = () => {
        showList(!list);
    }
    
    return(
        <div className="header__shoppingCart">
            <span className="header__shoppingCart-counter">{quantity}</span>
            <ShoppingCartIcon onClick={handleBasketList}/>
            {
                list
                ?
                <BasketList />
                : ''
            }
        </div>
    )
}

export default Basket;