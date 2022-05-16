import React from 'react';
import GlobalStateContext from './Context/GlobalStateContext';
import Rutas from './Routes/Rutas';



function App() {
  return (
    <>
      <GlobalStateContext>
        <Rutas />
      </GlobalStateContext>
    </>
  );
}

export default App;
