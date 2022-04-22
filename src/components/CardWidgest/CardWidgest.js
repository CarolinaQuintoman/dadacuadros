import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CardWidgest = () => {
  return (
    <nav className="navbar">
        <h3 className="nav-link" href="#carrito" style={{fontSize:'20px', color:'#7e90b4'}}>
            <FontAwesomeIcon icon={faCartShopping}/></h3>
    </nav>

  )
}

export default CardWidgest
