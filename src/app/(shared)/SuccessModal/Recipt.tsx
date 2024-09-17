import { useState } from 'react';
import CartObject from '../Cart/CartObject';
import GrayDiv from './GrayDiv';

export default function Recipt() {

  return (
    <div className="successModal__recipt">
      <GrayDiv />
      <div className="successModal__recipt__blackDiv">
        <p>GRAND TOTAL</p>
        <p>$ 5000</p>
      </div>
    </div>
  );
}
