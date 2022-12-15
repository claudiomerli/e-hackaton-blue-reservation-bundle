import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "14px",
    boxShadow: 24,
    p: 5,
};

const PopUp = ({ handleCloseModal, modal }) => {
    const [rooms, setRooms] = useState([]);
    const [name, setName] = useState("");
    const [typology, setTypology] = useState("");
    const [price, setPrice] = useState("");
    const [guest, setGuest] = useState(1);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleTypology = (e) => {
        setTypology(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(parseInt(e.target.value));
    };

    const handleGuest = (e) => {
        setGuest(parseInt(e.target.value));
    };

    const handleCreateRoom = () => {
        setRooms([...rooms, { name, typology, price, guest }]);
        handleCloseModal();
    };

    return (
        <Modal open={modal} onClose={handleCloseModal}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Creazione stanza
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: "20px" }}
                            onChange={handleName}
                            id="outlined-basic"
                            label="Nome stanza"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: "20px" }}
                            onChange={handleTypology}
                            id="outlined-basic"
                            label="Tipologia"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            onChange={handlePrice}
                            id="outlined-basic"
                            label="Prezzo"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            onChange={handleGuest}
                            id="outlined-basic"
                            label="Ospiti massimi"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <div
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                    <Button variant="contained" onClick={handleCloseModal}>
                        Chiudi
                    </Button>
                    <Button
                        sx={{ marginLeft: "20px" }}
                        variant="contained"
                        onClick={handleCreateRoom}>
                        Salva
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default PopUp;
