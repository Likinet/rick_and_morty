import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { removeFavorite, getFavorites} from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";

function Card({id, name, species, gender, image, onClose, myFavorites}) {
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const addFavorite = (character) => {
      axios
         .post('http://localhost:3001/rickandmorty/fav', character)
         .then((response) => console.log('add favorite ok'));
   };

   const removeFavorite = async (id) => {
      await axios
         .delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert('Eliminado con éxito!');
   };

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);  
      } else {
         setIsFav(true);
         addFavorite({id, name, species, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.closeButton} onClick={() => {removeFavorite(id); onClose(id)}}>X</button>
         <Link to={('/detail/'+id)} >
            <h2>{name}</h2>
         </Link>
         <img  src={image} alt={name} />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

