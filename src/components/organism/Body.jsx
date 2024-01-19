import React,{useState, useEffect} from "react";
import Item from "../molecules/Item";
import { getProducts } from "../services/productServices";
import Loader from "../atoms/Loader";

const Body = () => {
    
    const [itemData,setItemData] = useState(null);
    const [loading,setLoading] = useState(false);

    const loadData = (data) => {
        setItemData(data);
        setLoading(false);
    }
    
    useEffect(() => {
        setLoading(true);
        getProducts(loadData);
    },[]);

    if (loading) {
        return <Loader />
    }

    if (!itemData){ return null}

    return(
        <div className="dashboard">
            {
                itemData.map((it)=>{
                    return <Item key={'Item'+it.id} data={it}/>;
                })
            }
        </div>
    )
}

export default Body;