import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailConteiner from '../components/ItemDetailConteiner/ItemDetailConteiner';
import ItemListConteiner from '../components/ItemListContainer/ItemListConteiner';
import Layout from '../components/Layout/Layout';

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route index element={<ItemListConteiner />} />
          <Route path='/detail/:id' element={<ItemDetailConteiner/>}/>
            
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default Rutas