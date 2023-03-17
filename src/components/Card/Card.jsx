import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { agregarFavorito, quitarFavorito} from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Card({id, name, species, gender, image, onClose, agregarFavorito, quitarFavorito, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         quitarFavorito(id);
      } else {
         setIsFav(true);
         agregarFavorito({id, name, species, gender, image, onClose, agregarFavorito, quitarFavorito, myFavorites})
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
         <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
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
      agregarFavorito: (character) => {
         dispatch(agregarFavorito(character))
      },
      quitarFavorito: (id) => {
         dispatch(quitarFavorito(id))
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

