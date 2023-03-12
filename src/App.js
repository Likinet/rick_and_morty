import './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
// import style from './App.module.css'

function App () {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "45020e3e8f8b.95ada2dbf989fba4decf";

    if (characters.find(char => char.id === id)){
      return window.alert("personaje repetido");
    };
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name){
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('Algo Salió mal');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  };
  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav
          onSearch={onSearch} />
        <Cards
          characters={characters}
          onClose={onClose}/>
    </div>
  );
}

export default App
