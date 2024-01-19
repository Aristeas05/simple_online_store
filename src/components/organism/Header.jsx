import React from "react";
import Basket from "./Basket";
import { useSelector } from "react-redux";

const Header = () => {

    const counterState = useSelector(state => state.counter);
    
    return(
        <div className="header">
            <p className="title-text">Tienda</p>
            <Basket quantity={counterState}/>
        </div>
    )
}

export default Header;