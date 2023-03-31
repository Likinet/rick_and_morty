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
  
  //!CREDENCIALES FALSAS PARA LOGUEO
  const username = 'vivigalvagno@gmail.com';
  const password = '123456';
  
  useEffect(() => {
    !access && navigate('/')
  }, [access]);
  
  //! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";

    if (characters.find(char => char.id == id)){
      return window.alert("personaje repetido");
    };
    fetch(`${URL_BASE}/onsearch/${id}`)
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

  const logout = () => {
    setAccess(false);
    navigate('/');
  };

  //! RENDER
  return (
    <div>
        {pathname !== '/' && <Nav onSearch={onSearch}/>}
        <Routes>
          <Route path='/' element= {<Form login={login} logout={logout}/>}/>
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
