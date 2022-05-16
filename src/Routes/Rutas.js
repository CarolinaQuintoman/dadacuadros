import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from '../components/Card/Card';
import ItemDetailConteiner from '../components/ItemDetailConteiner/ItemDetailConteiner';
import ItemListConteiner from '../components/ItemListContainer/ItemListConteiner';
import Layout from '../components/Layout/Layout';

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index element={<ItemListConteiner />} />
            <Route path='/detail/:id' element={<ItemDetailConteiner/>}/>
            <Route path='/card' element={<Card /> } />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Rutas