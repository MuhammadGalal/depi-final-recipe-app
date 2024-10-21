import { createContext, useContext, useState  } from "react";

const SearchContext = createContext()
export const SearchProvider =  ({ children }) => {
    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search, setSearch} }>
            {children}
        </SearchContext.Provider>
    )
}
export const useSearch = () => useContext(SearchContext)