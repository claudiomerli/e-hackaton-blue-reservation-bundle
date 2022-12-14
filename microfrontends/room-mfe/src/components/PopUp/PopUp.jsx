import React from "react";
import { useState } from "react";
import "./PopUp.css";

const PopUp = ({handleCloseModal}) => {
    const [rooms, setRooms] = useState([])
    const [name, setName] = useState("")
    const [typology, setTypology] = useState("")
    const [price, setPrice] = useState("")
    const [guest, setGuest] = useState(1)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleTypology = (e) => {
        setTypology(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(parseInt(e.target.value))
    }

    const handleGuest = (e) => {
        setGuest(parseInt(e.target.value))
    }

    const handleCreateRoom = () => {
        setRooms([...rooms, {name, typology, price, guest}])
        handleCloseModal()
    }

    return (
        <div className="backdrop">
            <div className="modal">
                <h2>Creazione stanza</h2>
                <div className="row-1">
                    <div className="name d-flex-input">
                        <label htmlFor="name">Nome stanza</label>
                        <input onChange={handleName} placeholder="Nome Stanza" type="text" />
                    </div>
                    <div className="typology d-flex-input">
                        <label htmlFor="typology">Tipologia</label>
                        <input onChange={handleTypology} placeholder="Tipologia" type="text" />
                    </div>
                </div>
                <div className="row-2">
                    <div className="price d-flex-input">
                        <label htmlFor="price">Prezzo</label>
                        <input onChange={handlePrice} placeholder="Prezzo" type="number" />
                    </div>
                    <div className="guest d-flex-input">
                        <label htmlFor="guest">Ospiti massimi</label>
                        <input onChange={handleGuest} type="number" min="1" max="5" defaultValue="1" />
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleCloseModal}>Chiudi</button>
                    <button onClick={handleCreateRoom}>Salva</button>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
