import './App.css';
import SearchFilter from "./components/SearchFilter";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {SearchFilterProvider} from "./context/SearchFilterContext";
import RoomList from "./components/RoomList";

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <SearchFilterProvider>
                <SearchFilter/>
                <RoomList/>
            </SearchFilterProvider>
        </LocalizationProvider>
    );
}

export default App;
