import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import './CartButton.css'
  
export default function CartButton(props) {
 
    return (
    <div className='cart-icon'>
      <div>
        <Badge color="secondary">
          <ShoppingCartIcon />{" "}
        </Badge>
      </div>
    </div>
  );
}