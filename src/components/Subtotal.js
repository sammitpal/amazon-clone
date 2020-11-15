import { ShoppingBasket } from '@material-ui/icons'
import React from 'react';
import CurrencyFormat from "react-currency-format";
import { getBasketToatal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketToatal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
  
        <button>Proceed to Checkout</button>
      </div>
    );
}

export default Subtotal
