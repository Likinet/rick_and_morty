// import style from "./Detail.module.css"
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = React.useState({});

    React.useEffect( () => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "45020e3e8f8b.95ada2dbf989fba4decf";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response)=>
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