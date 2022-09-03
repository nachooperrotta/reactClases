import './App.css';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar'; 

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

