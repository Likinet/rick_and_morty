import style from "./Card.module.css"

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <img  src={image} alt={name} />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
