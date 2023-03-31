// import style from "./SearchBar.module.css";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      // <div className={style.bar}>
      <div>
         <input
                  type='search'
                  onChange={handleChange}/>
         <button
                  onClick={() => {onSearch(id)}}>
            Agregar
         </button>
      </div>
   );
}
