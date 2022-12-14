import React from 'react'

const PopUpEdit = ({handleCloseEditModal}) => {
  return (
    <div className="backdrop">
            <div className="modal">
                <h2>Modifica stanza</h2>
                <div className="row-1">
                    <div className="name d-flex-input">
                        <label htmlFor="name">Nome stanza</label>
                        <input placeholder="Nome Stanza" type="text" />
                    </div>
                    <div className="typology d-flex-input">
                        <label htmlFor="typology">Tipologia</label>
                        <input placeholder="Tipologia" type="text" />
                    </div>
                </div>
                <div className="row-2">
                    <div className="price d-flex-input">
                        <label htmlFor="price">Prezzo</label>
                        <input placeholder="Prezzo" type="number" />
                    </div>
                    <div className="guest d-flex-input">
                        <label htmlFor="guest">Ospiti massimi</label>
                        <input type="number" min="1" max="5" defaultValue="1" />
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleCloseEditModal}>Chiudi</button>
                    <button>Salva</button>
                </div>
            </div>
        </div>
  )
}

export default PopUpEdit