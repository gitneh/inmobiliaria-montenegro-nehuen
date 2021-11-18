import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { useEffect, useState } from 'react';
import ItemDetail from './Components/ItemDetail';
function App() {
  const [datos, setDatos] = useState ([]);
  useEffect (() => {
    ItemDetail ()
    .then (result => setDatos(result))
    .catch (err => console.log (err))
}, []);
  return (
    <>
    <NavBar />
    <hr />
    <h1 className="centrar" style={{color: "purple"}}><ItemListContainer nombre="Inmobiliaria Robin" /></h1>
    <hr />
    <ul>{
      datos.map ((dato) => <li key={dato.id}>{dato.pictureUrl[0]}</li>)
    }</ul>
    <hr />
    &copy; 2021. Made by Coders.
</>
  );
}
export default App;
