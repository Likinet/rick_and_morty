import { QUITAR_FAVORITO, AGREGAR_FAVORITO, FILTER, ORDER } from "./actions";

const initialState ={
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type){
        case AGREGAR_FAVORITO:
            return {
                ...state,
                // myFavorites:[...state.myFavorites, action.payload]
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case QUITAR_FAVORITO:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                )
            };
        case FILTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters].filter((character) => character.gender === action.payload)
            };
        case ORDER:
            return {
                ...state,
                myFavorites:[...state.allCharacters].sort(function (char1, char2) { return (action.payload === 'Ascendente') ?
                                                                    (char1.id - char2.id)
                                                                    : (char2.id - char1.id)
                                                                } )
            };
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;