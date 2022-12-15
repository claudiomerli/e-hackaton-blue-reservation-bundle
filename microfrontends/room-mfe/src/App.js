import { useState } from "react";
import "./App.css";
import PopUp from "./components/PopUp/PopUp";
import Rooms from "./components/Rooms/Rooms";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

function App() {
    const [modal, setModal] = useState(false);

    const handleCloseModal = () => {
        setModal(false);
    };

    return (
        <>
            {modal && <PopUp modal={modal} handleCloseModal={handleCloseModal} />}
            <Box
                sx={{
                    width: "400px",
                    height: "150px",
                    borderRadius: "14px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                    margin: "10px auto",
                    padding: "10px",
                    position: "relative",
                }}>
                <Typography
                    sx={{ fontSize: "30px", marginTop: "5px" }} variant="h6" component="h2">
                    Nuova Stanza
                </Typography>
                <div className="button">
                    <Button
                        sx={{
                            position: "absolute",
                            bottom: "30px",
                            right: "50px",
                        }}
                        variant="contained"
                        onClick={() => setModal(true)}>
                        Crea
                    </Button>
                </div>
            </Box>
            <Rooms />
        </>
    );
}

export default App;
