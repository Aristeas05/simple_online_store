import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanList } from "../../state/itemList/itemListSlice";
import { restartCounter } from "../../state/counter/counterSlice";
import { removeFromList } from "../../state/itemList/itemListSlice";
import { reduceCounter } from "../../state/counter/counterSlice";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

const BasketList = () => {
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList);
    const [totalCost,setTotalCost] = useState(0);

    const updateTotalCost = () => {
        let totalCost = 0;
        itemList.forEach(it => {
            totalCost = totalCost + it.price;
        });
        setTotalCost(totalCost);
    }

    const handleEmptyBasket = () => {
        dispatch(restartCounter());
        dispatch(cleanList());
    }

    const handleDeleteItem = (id) => {
        dispatch(reduceCounter());
        dispatch(removeFromList(id));
    }

    useEffect(() => {
        updateTotalCost();
    }, [itemList]);

    return(
        <div className="header__shoppingCart-basketList">
            <div className="empty">
                <span className="flexClass" onClick={handleEmptyBasket}>Vaciar <RemoveShoppingCartOutlinedIcon/></span>
            </div>
            <div className="list-title list-order title-text">
                <p>Carrito</p>
            </div>
            <div className="listBox">
                {
                    itemList.length
                    ?
                        itemList.map((itm) => {
                            return(
                                <div className="list-item list-order">
                                    <p>{itm.name}</p>
                                    <DeleteForeverOutlinedIcon onClick={() => handleDeleteItem(itm.id)}/>
                                </div>
                            )
                        })
                    : 
                        <div className="list-item list-order">
                            <p>Carrito Vacio</p>
                        </div>
                }
            </div>
            <div className="list-total list-order">
                <p>Total </p>
                <p>: S/. {totalCost}.00</p>
            </div>
        </div>
    )
}

export default BasketList;