    import { createContext, useContext, useState } from "react";

    const FavoritesContext = createContext()

    export const FavoritesProvider = ({ children }) => {
        const [favorites, setFavorites] = useState([])

        const addFavorite = (recipe) => {
            setFavorites((prevFavorites) => [...prevFavorites, recipe])
        };

        const removeFavorite = (recipeId) => {
            setFavorites((prevFavorites) => prevFavorites.filter(recipe => recipe.id !== recipeId))
        }

        return (
            <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
                {children}
            </FavoritesContext.Provider>
        )
    }

    export const useFavorites = () => useContext(FavoritesContext)
