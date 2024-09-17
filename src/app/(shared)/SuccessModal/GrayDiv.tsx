import { useState } from 'react';
import CartObject from '../Cart/CartObject';

export default function GrayDiv() {
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="successModal__recipt__grayDiv">
      <ul className="successModal__recipt__grayDiv__objectList">
        <li className="successModal__recipt__grayDiv__objectList__item">
          <CartObject isEditabdle={false} />
        </li>
        <li className="successModal__recipt__grayDiv__objectList__item">
          <CartObject isEditabdle={false} />
        </li>
        <li className="successModal__recipt__grayDiv__objectList__item">
          <p>+2 More Items</p>
        </li>
      </ul>
    </div>
  );
}
