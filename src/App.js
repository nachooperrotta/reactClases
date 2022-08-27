// import logo from './logo.svg';
import './App.css';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar'; 

function App (props){

  return (
    <div className="container">
      <NavBar/>
      <ItemListConteiner greeting={"4"}/>
    </div>
  );
}

export default App;

