import React,{useState, useEffect} from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { buttonSty, boxStyle, modalSty } from "../UIStyles/styles";
import { getProductById } from "../services/productServices";
import Loader from "./Loader";

const DetailedItem = ({id,modalState,closeModal,buttonVal,itemAction}) => {

    const [itemData,setItemData] = useState(null);
    const [loading,setLoading] = useState(false);

    const loadData = (data) => {
        setItemData(data);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getProductById(id,loadData)
    },[]);

    if (loading) {
        return <Loader />
    }

    if (!itemData){ return null}

    return(
            <Modal
                open={modalState}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={modalSty}
            >
                <Box sx={boxStyle}>
                    <div className="item">
                        <img src={itemData.imgURL} alt={itemData.name} />
                        <div className="item__body">
                            <div className="flexClass title-text">
                                <p>{itemData.name}</p>
                                <p>S/. {itemData.price}.00</p>
                            </div>
                            <p className="body-text body-text__modal">
                                {itemData.description}
                            </p>
                            <p className="title-text">Información extra</p>
                            <p className="body-text body-text__modal">
                                {itemData.extraInfo}
                            </p>
                            <div className="item__body-buttons" align="right">
                            {
                               buttonVal
                                ? 
                                    <Button onClick={() => itemAction('eliminar')} variant="outlined" sx={buttonSty}>Eliminar</Button>
                                : 
                                    <Button onClick={() => itemAction('agregar')} variant="outlined" sx={buttonSty}>Agregar</Button>
                            }
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        
    )
}

export default DetailedItem;