import {Alert, Box, Button, Card, Modal, TextField, Typography} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {useContext, useState} from "react";
import moment from "moment";
import SearchIcon from '@mui/icons-material/Search';
import {SearchFilterContext} from "../context/SearchFilterContext";
import DeleteIcon from '@mui/icons-material/Delete';
import {modalStyle} from "../utils/utils";
import {deleteReservation} from "../service/ReservationService";

export default function SearchFilter() {

    const [searchFilter, setSearchFilter] = useContext(SearchFilterContext)
    const [deleteReservationModal, setDeleteReservationModal] = useState(false)
    const [reservationId, setReservationId] = useState("")


    const confirmDelete = () => {
        deleteReservation(reservationId)
            .then(() => {
                setDeleteReservationModal(false)
                setSearchFilter({...searchFilter})
            })
    }


    return (
        <>
            <Card sx={{m: 1, p: 1}}>
                <Typography variant={'h5'}>
                    Prenota il tuo soggiorno...
                </Typography>
                <Box display={"flex"} sx={{mt: 1}} justifyContent={"center"} alignItems={"center"}>
                    <Box sx={{mx: 3}}>
                        <DesktopDatePicker
                            label="Data arrivo"
                            value={searchFilter.startDate}
                            onChange={(newValue) => {
                                setSearchFilter({...searchFilter, startDate: newValue});
                            }}
                            inputFormat="DD/MM/YYYY"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Box>
                    <Box sx={{mx: 3}}>
                        <DesktopDatePicker
                            label="Data partenza"
                            value={searchFilter.endDate}
                            onChange={(newValue) => {
                                setSearchFilter({...searchFilter, endDate: newValue});
                            }}
                            inputFormat="DD/MM/YYYY"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Box>
                    <Box sx={{mx: 3}}>
                        <Button variant="outlined" color={"error"} onClick={() => setDeleteReservationModal(true)}>
                            <DeleteIcon/> Elimina una prenotazione
                        </Button>
                    </Box>
                </Box>
            </Card>
            <Modal
                open={deleteReservationModal}
                onClose={setDeleteReservationModal}
            >
                <Box sx={modalStyle}>
                    <TextField value={reservationId} onChange={event => setReservationId(event.target.value)} fullWidth
                               label="Codice di prenotazione" variant="outlined"/>
                    <Button onClick={() => confirmDelete()} color={"error"}>Conferma</Button>
                </Box>
            </Modal>
        </>
    )
}
