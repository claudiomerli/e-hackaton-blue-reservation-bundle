import {createContext, useState} from "react";
import moment from "moment";


export const SearchFilterContext = createContext(undefined);
export const SearchFilterProvider = ({children}) => {
    const [searchFilter, setSearchFilter] = useState({
        startDate: moment().add(1, 'd'),
        endDate: moment().add(8, 'd')
    })

    return (
        <SearchFilterContext.Provider value={[searchFilter, setSearchFilter]}>
            {children}
        </SearchFilterContext.Provider>
    );
};

