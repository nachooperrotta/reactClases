import './App.css';
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner';
import NavBar from './components/NavBar/NavBar'; 

function App (){

  return (
    <div className="container">
      <header className= "appHeader">
        <NavBar/>
      </header>
      <ItemListConteiner/>
    </div>
  );
}

export default App;

