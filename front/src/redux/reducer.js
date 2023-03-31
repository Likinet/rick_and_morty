import { REMOVE_FAVORITE, FILTER, ORDER, GET_FAVORITES } from "./actions";

const initialState ={
    myFavorites: [],
    allCharacters: [],
    allFavs: []
}

const rootReducer = (state=initialState, action) =>{
    switch (action.type){
        // case ADD_FAVORITE:
        //     return {
        //         ...state,
        //         myFavorites:[...state.allCharacters, action.payload],
        //         allCharacters: [...state.allCharacters, action.payload]
        //     };
        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                )
            };
        case FILTER:
            return {
                ...state,
                myFavorites:    action.payload == 'All'
                                ? [...state.allCharacters]
                                : [...state.allCharacters].filter((char) => char.gender === action.payload)
            };
        case ORDER:
            return {
                ...state,
                myFavorites:    action.payload === 'Ascendente'
                                ? [...state.allCharacters].sort((char1, char2) => char1.id - char2.id)
                                : [...state.allCharacters].sort((char1, char2) => char2.id - char1.id)

            };
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload
            }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;