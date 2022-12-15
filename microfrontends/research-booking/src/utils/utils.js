export const getFromZeroToArray = (max) =>{
    const array = []
    for (let i = 0; i <= max; i++){
        array.push(i)
    }

    return array;
}

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
