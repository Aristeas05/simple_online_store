export const buttonSty = {
    borderRadius: '40px',
    textTransform: 'none',
    border: '2px solid black !important',
    color: 'black',
    padding: '5px 30px',
    fontWeight: '600',
}

export const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '310px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    padding: '0px',
    '@media only screen and (min-width: 768px)': {
      width: '570px',
    },
};

export const modalSty = {
    '& .MuiModal-backdrop':{
        backgroundColor: 'rgb(102 100 100 / 95%)',
    }
}