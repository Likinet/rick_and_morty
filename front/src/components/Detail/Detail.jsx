// import style from "./Detail.module.css"
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = React.useState({});

    React.useEffect( () => {
        const URL_BASE = "http://localhost:3001";  

        axios(`${URL_BASE}/detail/${detailId}`)
        .then((response)=>
            setCharacter(response.data)
            );
    }, []);

    return (
        <div>
            {
                character.name ?
                (<>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="img" />
                </>)
                :
                (<h3>Loading...</h3>)
            }
            <div><Link to='/home'>Volver</Link></div>
        </div>
    );
};

export default Detail;