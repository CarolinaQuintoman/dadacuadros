import './App.css';
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner';
import NavBar from './components/navBar/NavBar';




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListConteiner
      greeting={'Nuestros Productos'}
      />
         
    </div>
  );
}

export default App;
