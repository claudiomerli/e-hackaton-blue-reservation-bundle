import {useContext, useEffect, useState} from "react";
import {SearchFilterContext} from "../context/SearchFilterContext";
import {
    Box,
    Button,
    Card,
    FormControl,
    Grid, InputLabel,
    MenuItem,
    Modal, Select,
    TextField,
    Typography
} from "@mui/material";
import {getAvailableRoomsByDate, reserve} from "../service/ReservationService";
import BedIcon from '@mui/icons-material/Bed';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HotTubIcon from '@mui/icons-material/HotTub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getFromZeroToArray, modalStyle} from "../utils/utils";
import GroupIcon from '@mui/icons-material/Group';

export default function RoomList() {
    const [searchFilter] = useContext(SearchFilterContext)
    const [availableRooms, setAvailableRooms] = useState();
    const [reservationModalOpen, setReservationModalOpen] = useState(false);
    const [reservationCompletedModalOpen, setReservationCompletedModalOpen] = useState(false);
    const [reservationCode, setReservationCode] = useState("");
    const [reservationData, setReservationData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        paymentType: "ONLINE",
        reservationRequests: []
    })

    useEffect(() => {
        if (availableRooms)
            setReservationData({
                ...reservationData,
                reservationRequests: availableRooms ? availableRooms.map((room) => {
                    return {
                        roomId: room.roomId,
                        price: room.price,
                        guestNumber: 0
                    }
                }) : []
            })
    }, [availableRooms])

    useEffect(() => {
        fetchAvailableRooms()
    }, [])

    useEffect(() => {
        fetchAvailableRooms()
    }, [searchFilter])


    const fetchAvailableRooms = () => {
        getAvailableRoomsByDate(searchFilter).then(availableRooms => {
            console.log(availableRooms)
            setAvailableRooms(availableRooms)
        })
    }


    const getTotal = () => {
        if (reservationData) {
            return reservationData.reservationRequests
                .filter(entry => entry.guestNumber > 0)
                .reduce((acc, entry) => acc + entry.price, 0)
        } else {
            return 0
        }
    }

    const isFormValid = () => {
        return reservationData.firstname != "" &&
            reservationData.lastname !== "" &&
            reservationData.email != ""
    }

    const sendReservation = () => {
        reserve({
            startDate: searchFilter.startDate.format("YYYY-MM-DD"),
            endDate: searchFilter.endDate.format("YYYY-MM-DD"),
            paymentType: reservationData.paymentType,
            firstName: reservationData.firstname,
            lastName:reservationData.lastname,
            userEmail: reservationData.email,
            reservationRequests: reservationData.reservationRequests.map((rd)=>{
                return {
                    roomID: rd.roomId,
                    guestNumber: rd.guestNumber
                }
            })
        })
            .then(reservationResponse => {
                setReservationModalOpen(false)
                setReservationCode(reservationResponse.reservationCode)
                setReservationCompletedModalOpen(true)
            })
    }

    const closeReservationIdModal = () => {
        //Reset variable
        setReservationData({
            firstname: "",
            lastname: "",
            email: "",
            paymentType: "ONLINE",
            reservationRequests: []
        })
        fetchAvailableRooms()
    }


    return (
        <>

            <Box sx={{mx: 3}}>
                <Card sx={{
                    p: 2,
                    my: 2,
                    minHeight: "6rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography variant={"h4"}>Totale: {getTotal()} €</Typography>
                    <Button size={"large"} onClick={() => {
                        setReservationModalOpen(true)
                    }} disabled={getTotal() == 0}>
                        Prenota <ArrowForwardIosIcon/>
                    </Button>
                </Card>
                {availableRooms &&
                    availableRooms.map((room, index) => (
                        <Card key={index} sx={{p: 2, my: 2, minHeight: "6rem"}}>
                            <Grid m={0} container spacing={2}>
                                <Grid item xs={3}>
                                    <Typography variant="h6" display={'flex'} alignItems={"center"}><BedIcon/>
                                        {room.name}
                                    </Typography>
                                    <Typography display={'flex'} alignItems={"center"} variant="overline">
                                        {room.roomTipology === 'ECONOMY' && <AttachMoneyIcon fontSize={"small"}/>}
                                        {room.roomTipology === 'LUXURY' && <StarIcon fontSize={"small"}/>}
                                        {room.roomTipology === 'SUITE' && <HotTubIcon fontSize={"small"}/>}
                                        {room.roomTipology}
                                    </Typography>
                                    <Typography display={'flex'} alignItems={"center"} variant="overline">
                                        <GroupIcon/> Capacità: {room.capacity} ospiti
                                    </Typography>
                                </Grid>
                                <Grid item xs={7} alignItems={"center"} display={"flex"} justifyContent={"end"}>
                                    <Typography variant="h4">{room.price} €</Typography>
                                </Grid>
                                <Grid item xs={1} alignItems={"center"} display={"flex"} justifyContent={"end"}>{
                                    reservationData.reservationRequests[index] &&
                                    <FormControl fullWidth>
                                        <InputLabel id="guest-number-select-label">
                                            Numero ospiti
                                        </InputLabel>
                                        <Select
                                            labelId="guest-number-select-label"
                                            id="guest-number-select"
                                            value={reservationData.reservationRequests[index].guestNumber}
                                            label="Numero ospiti"
                                            onChange={(event) => {
                                                const clonedReservationData = {...reservationData}
                                                clonedReservationData.reservationRequests[index].guestNumber = event.target.value
                                                setReservationData(clonedReservationData)
                                            }}
                                        >
                                            {getFromZeroToArray(room.capacity).map(n => (
                                                <MenuItem key={n} value={n}>{n}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                }
                                </Grid>
                            </Grid>
                        </Card>
                    ))
                }
            </Box>
            <Modal open={reservationModalOpen} onClose={() => {
                setReservationModalOpen(false)
            }}>
                <Box sx={modalStyle}>
                    <TextField sx={{my: 1}} fullWidth value={reservationData.firstname}
                               onChange={(newValue) => setReservationData({
                                   ...reservationData,
                                   firstname: newValue.target.value
                               })} variant="outlined" value={reservationData.firstname} label={"Firstname"}
                               type={"text"}/>
                    <TextField sx={{my: 1}} fullWidth value={reservationData.lastname}
                               onChange={(newValue) => setReservationData({
                                   ...reservationData,
                                   lastname: newValue.target.value
                               })} variant="outlined" value={reservationData.lastname} label={"Lastname"}
                               type={"text"}/>
                    <TextField sx={{my: 1}} fullWidth value={reservationData.email}
                               onChange={(newValue) => setReservationData({
                                   ...reservationData,
                                   email: newValue.target.value
                               })} variant="outlined" value={reservationData.email} label={"Email"} type={"email"}/>
                    <FormControl sx={{my: 1}} fullWidth>
                        <InputLabel id="guest-number-select-label">
                            Tipo di pagamento
                        </InputLabel>
                        <Select
                            labelId="payment-type-select-label"
                            id="payment-type-select"
                            label="Tipo di pagamento"
                            value={reservationData.paymentType}
                            onChange={(newValue) => setReservationData({
                                ...reservationData,
                                paymentType: newValue.target.value
                            })}
                        >
                            <MenuItem value={"ONLINE"}>Online</MenuItem>
                            <MenuItem value={"DESK"}>Sul posto</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{textAlign: "right"}}>
                        <Button variant="outlined" disabled={!isFormValid()} onClick={() => sendReservation()}>
                            Prenota
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Modal open={reservationCompletedModalOpen} onClose={() => {
                setReservationCompletedModalOpen(false)
                closeReservationIdModal()
            }}>
                <Box sx={modalStyle}>
                    <Typography variant={"h5"}>
                        Hai prenotato! Il tuo codice prenotazione è:
                    </Typography>
                    <Typography style={{fontWeight: "bold"}} variant={"h4"}>
                        {reservationCode}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
