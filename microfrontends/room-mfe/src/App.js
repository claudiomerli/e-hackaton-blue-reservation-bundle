import { useState } from "react";
import "./App.css";
import PopUp from "./components/PopUp/PopUp";
import Rooms from "./components/Rooms/Rooms";

function App() {
  const [modal, setModal] = useState(false)

  const handleCloseModal = () => {
    setModal(false);
  }

    return (
        <>
          {modal && <PopUp handleCloseModal={handleCloseModal} />}
            <div className="create-modal">
                <h2>Nuova Stanza</h2>
                <div className="button">
                    <button onClick={() => setModal(true)}>Crea</button>
                </div>
            </div>
            <Rooms />
        </>
    );
}

export default App;
