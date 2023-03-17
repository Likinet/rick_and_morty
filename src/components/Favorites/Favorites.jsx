import { useSelector } from "react-redux";
import Card from '../Card/Card';

// const handleFilterCards

const Favorites = () => {
    const favorites = useSelector((state) => state.myfavorites);

    return (
        <div>
            <div>
                <select name='order'>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select name='filter'>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>
            </div>
            {   
                favorites.map((favorite) => { return  (<Card    id={favorite?.id}
                                                                name={favorite?.name}
                                                                species={favorite?.species}
                                                                gender={favorite?.gender}
                                                                image={favorite?.image}
                                                        />)
                })
            }
        </div>
    )
};

export default Favorites;