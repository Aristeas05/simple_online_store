import React,{useState} from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';
import DetailedItem from "../atoms/DetailedItem";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../../state/counter/counterSlice";
import { reduceCounter } from "../../state/counter/counterSlice";
import { addToList } from "../../state/itemList/itemListSlice";
import { removeFromList } from "../../state/itemList/itemListSlice";
import { buttonSty } from "../UIStyles/styles";
import ConfirmationModal from "../atoms/ConfirmationModal";

const Item = ({data}) => {

    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList);
    const [questionType, setQuestionType] = useState('');
    const [openDetail, setOpenDetail] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const handleOpen = () => setOpenDetail(true);
    const handleClose = () => setOpenDetail(false);

    const handleOpenConfModal = (val) => {
        setQuestionType(val);
        setConfirmation(true);
    }
    
    const handleCloseConfModal = () => {
        setConfirmation(false);
    }

    const handleAction = () => {
        switch (questionType) {
            case 'agregar':
                dispatch(addCounter());
                dispatch(addToList(data));
                break;
            case 'eliminar':
                dispatch(reduceCounter());
                dispatch(removeFromList(data.id));
                break;
        }
        setQuestionType('');
        setConfirmation(false);
    }

    return(
        <div className="item-box">
            <div className="item-wrap">
                <div className="item">
                    <img src={data.imgURL} alt={data.name} />
                    <div className="item__body">
                        <p className="title-text">{data.name}</p>
                        <p className="body-text">
                            {data.description}
                        </p>
                        <p className="title-text" align="right">S/. {data.price}.00</p>
                        <div className="flexClass item__body-buttons">
                            <span className="flexClass" onClick={handleOpen}><HelpOutlineIcon /> Vista previa</span>
                            {
                               itemList.find(it => it.id === data.id) 
                                ? 
                                    <Button onClick={() => handleOpenConfModal('eliminar')} variant="outlined" sx={buttonSty}>Eliminar</Button>
                                : 
                                    <Button onClick={() => handleOpenConfModal('agregar')} variant="outlined" sx={buttonSty}>Agregar</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                openDetail
                ?
                    <DetailedItem 
                        key={'ModalItem'+data.id} 
                        id={data.id} 
                        modalState={openDetail}
                        closeModal={handleClose} 
                        buttonVal={itemList.find(it => it.id === data.id)} 
                        itemAction={handleOpenConfModal}
                    />
                : ''
            }
            <ConfirmationModal 
                key={'ConfirmationModal'+data.id}
                modalState={confirmation}
                closeModal={handleCloseConfModal} 
                questionWord={questionType}
                itemAction={handleAction}
            />
        </div>
        
    )
}

export default Item;