import React, { useState } from "react";
import PopUpEdit from "../PopUp/PopUpEdit";

const Rooms = () => {
    const [rooms, setRooms] = useState([
        {
            id: 1,
            nome: "Stanza 1",
            prezzo: "80",
            tipologia: "Matrimoniale",
            ospiti: "2",
        },
        {
            id: 2,
            nome: "Stanza 2",
            prezzo: "180",
            tipologia: "Tripla",
            ospiti: "3",
        },
        {
            id: 3,
            nome: "Stanza 3",
            prezzo: "40",
            tipologia: "Singola",
            ospiti: "1",
        },
    ]);
    const [editModal, setEditModal] = useState(false)

    const handleOpenEditModal = () => {
        setEditModal(true)
    }

    const handleCloseEditModal = () => {
        setEditModal(false)
    }

    const handleDeleteRoom = (roomId) => {
        const newRooms = rooms.filter(r => r.id != roomId)
        setRooms(newRooms)
    }

    return (
        <>
            {editModal && <PopUpEdit handleCloseEditModal={handleCloseEditModal} />}
            {rooms.map((room) => {
                return (
                    <div className="room-container" key={room.id}>
                        <div className="data">
                            <span>{room.nome}</span>
                            <span>{room.prezzo}</span>
                            <span>{room.tipologia}</span>
                            <span>{room.ospiti}</span>
                        </div>
                        <div className="controls">
                            <button onClick={handleOpenEditModal}>Modifica</button>
                            <button onClick={() => handleDeleteRoom(room.id)}>Elimina</button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Rooms;
