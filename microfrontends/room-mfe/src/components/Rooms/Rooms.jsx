import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import PopUpEdit from "../PopUp/PopUpEdit";
import { Button } from "@mui/material";

const Rooms = () => {
    const [editModal, setEditModal] = useState(false);
    const [data, setData] = useState({});
    const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     const data = await fetch("chiamata");
    //     const json = await data.json();
    //     setRooms(json);
    //   }
    //     fetchData()
    //     .catch(console.error);
    // }, [json])

    const handleOpenEditModal = (room) => {
        setEditModal(true);
        setData(room);
    };

    const handleCloseEditModal = () => {
        setEditModal(false);
    };

    const handleDeleteRoom = (roomId) => {
        const newRooms = rooms.filter((r) => r.id != roomId);
        setRooms(newRooms);
    };

    return (
        <>
            {editModal && (
                <PopUpEdit
                    editModal={editModal}
                    data={data}
                    handleCloseEditModal={handleCloseEditModal}
                />
            )}
            <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Lista Stanze</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Tipologia</TableCell>
                            <TableCell align="center">Ospiti</TableCell>
                            <TableCell align="center">Prezzo</TableCell>
                            <TableCell align="center">Modifica</TableCell>
                            <TableCell align="center">Elimina</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.map((room) => {
                            return (
                                <TableRow
                                    key={room.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center">
                                        {room.id}
                                    </TableCell>
                                    <TableCell align="center">
                                        {room.nome}
                                    </TableCell>
                                    <TableCell align="center">
                                        {room.tipologia}
                                    </TableCell>
                                    <TableCell align="center">
                                        {room.ospiti}
                                    </TableCell>
                                    <TableCell align="center">
                                        {room.prezzo}€
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                handleOpenEditModal(room)
                                            }>
                                            Modifica
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            color="error"
                                            variant="contained"
                                            onClick={() =>
                                                handleDeleteRoom(room.id)
                                            }>
                                            Elimina
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Rooms;
