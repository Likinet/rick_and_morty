import Card from '../Card/Card';
import { CardsContainer } from './styledComponent';

export default function Cards({ characters, onClose }) {
   return (
      <CardsContainer>
         {characters.map((character) =>   {return (<Card id={character.id}
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
