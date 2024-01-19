import React,{useState, useEffect} from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { buttonSty, boxStyle, modalSty } from "../UIStyles/styles";

const ConfirmationModal = ({questionWord,modalState,closeModal,itemAction}) => {

    return(
        <Modal
            open={modalState}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={modalSty}
        >
            <Box sx={boxStyle}>
                <div className="confModal">
                    <div className="confModal__body">
                        <div className="title-text">
                            <p align="center">¿Esta seguro de {questionWord} el producto seleccionado?</p>
                        </div>
                        <div className="confModal__body-confButtons" align="right">
                            <Button onClick={itemAction} variant="outlined" sx={buttonSty}>Si</Button>
                            <Button onClick={closeModal} variant="outlined" sx={buttonSty}>No</Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
        
    )
}

export default ConfirmationModal;