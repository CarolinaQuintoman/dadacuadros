import Acuarelas from '../../assets/28042022.jpg';
import Marcos from '../../assets/28042034.jpg';
import Espejos from '../../assets/280420308.jpg';
import DiseñosPropios from '../../assets/28042031.jpg';
import Decoracion from '../../assets/280420307.jpg';
import Paisajes from '../../assets/2804203043.jpg';

export const product = [
    {
      id:1,
      imagen: Acuarelas,
      precio: "$3000",
      titulo: "Acuarelas"
    },
    {
      id:1,
      imagen: Marcos,
      precio: "$5000",
      titulo: "Marcos"
    },
    {
      id:1,
      imagen: Espejos,
      precio: "$3900",
      titulo: "Espejos"
    },
    {
      id:1,
      imagen: DiseñosPropios,
      precio: "$5000",
      titulo: "Diseños"
    },
    {
      id:1,
      imagen: Decoracion,
      precio: "$7000",
      titulo: "Decoración"
    },
    {
      id:1,
      imagen: Paisajes,
      precio: "$3800",
      titulo: "Paisajes"
    }
  ];
    
  
  export const getProduct = () =>{
      return new Promise ((resolve,reject) => {
  
        setTimeout(() => resolve(product),2000);
  
      });
    };
