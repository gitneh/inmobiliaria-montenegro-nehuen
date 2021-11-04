import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
function App() {
  return (
    <>
    <NavBar />
    <hr />
    <h1 className="centrar" style={{color: "purple"}}><ItemListContainer nombre="Inmobiliaria Robin" /></h1>
</>
  );
}
export default App;
