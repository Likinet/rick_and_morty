import Card from '../Card/Card';
import { CardsContainer } from './styledComponent';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";

export default function Cards({ characters, onClose }) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getFavorites())
   },[]);

   return (
      <CardsContainer>
         {characters.map((character) =>   {return (<Card
                                                   key={character.id}
                                                   id={character.id}
                                                   name={character.name}
                                                   species={character.species}
                                                   gender={character.gender}
                                                   image={character.image}
                                                   onClose={onClose}
                                                />);
                                          }
                        )
         }
      </CardsContainer>);
}
