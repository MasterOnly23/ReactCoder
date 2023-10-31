import './CartWidgetComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {

    return (
        <div className="dropdownn" id="cart-dropdown">
      <div className="cart-icon dropdownn">
      <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{"--fa-primary-color": "white", "--fa-secondary-color": "#c3e66b", "color":"#ffffff", "font-size":"35px"}} />
        <div className="cart-count">5</div>
      </div>
      </div>
    )
};

export default CartWidgetComponent;