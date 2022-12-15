import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import React from "react";

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

const PopUpEdit = ({ editModal, handleCloseEditModal, data }) => {
    return (
        <Modal open={editModal} onClose={handleCloseEditModal}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Modifica stanza
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: "20px" }}
                            id="outlined-basic"
                            label="Nome stanza"
                            variant="outlined"
                            defaultValue={data.nome}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            sx={{ marginTop: "20px" }}
                            id="outlined-basic"
                            label="Tipologia"
                            variant="outlined"
                            defaultValue={data.tipologia}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Prezzo"
                            variant="outlined"
                            defaultValue={data.prezzo}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Ospiti massimi"
                            variant="outlined"
                            defaultValue={data.ospiti}
                        />
                    </Grid>
                </Grid>
                <div
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                    <Button variant="contained" onClick={handleCloseEditModal}>
                        Chiudi
                    </Button>
                    <Button sx={{ marginLeft: "20px" }} variant="contained">
                        Salva
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default PopUpEdit;
