import './App.module.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import {useEffect, useState} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form/Form';
// import style from './App.module.css'

function App () {
  //! HOOKS
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/')
  }, [access]);
  
  //!CREDENCIALES FALSAS PARA LOGUEO
  const username = 'vivigalvagno@gmail.com';
  const password = '1234';

  //! EVENT HANDLERS
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

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
    else {
      alert('Credenciales incorrectas.')
    }
  };

  //! RENDER
  return (
    <div>
        {pathname !== '/' && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path='/' element= {<Form Login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters}
                                              onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App
