import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card';
import { orderCards, filterCards } from "../../redux/actions";
import { useEffect } from "react";
import { getFavorites } from "../../redux/actions";

// const handleFilterCards

const Favorites = () => {
    const dispatch = useDispatch();
    
    const favorites = useSelector((state) => state.myFavorites);

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select name='order' onChange={handlerOrder}>
                    <option value='order' disabled='disabled' >Order by...</option>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select name='filter' onChange={handlerFilter}>
                    <option value='filter' disabled='disabled' >Filter by...</option>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='Unknown'>Unknown</option>
                </select>
            </div>
            {   
                favorites.map((favorite) => { return  (<Card    key={favorite.id}
                                                                id={favorite.id}
                                                                name={favorite.name}
                                                                species={favorite.species}
                                                                gender={favorite.gender}
                                                                image={favorite.image}
                                                        />)
                })
            }
        </div>
    )
};

export default Favorites;