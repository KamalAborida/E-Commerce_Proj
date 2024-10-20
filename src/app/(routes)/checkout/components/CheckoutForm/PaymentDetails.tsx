'use client';

import React, { useContext } from 'react';
import Input from '../../../../shared/Input/Input';
import RadioBtn from '../RadioBtn/RadioBtn';
import RadioBtnContext from '../RadioBtn/radioBtns-context';
import Image from 'next/image';

export default function PaymentDetails() {
  const ctx = useContext(RadioBtnContext);

  return (
    <div className="checkoutForm__paymentDetails checkoutForm__subDiv">
      <h1 className="checkoutForm__subTitle">PAYMENT DETAILS</h1>
      <div className="checkoutForm__paymentDetails__inputsDiv">
        <div className="checkoutForm__paymentDetails__inputsDiv__paymentMethod">
          <label className="checkoutForm__paymentDetails__inputsDiv__paymentMethod__label">
            Payment Method
          </label>
          <RadioBtn label="E-Money" name="paymentMethod" value="e-money" />
          <RadioBtn
            label="Cash On Delivery"
            name="paymentMethod"
            value="cash"
          />
        </div>
        {ctx.currentValue === 'e-money' && (
          <>
            <Input
              label="E-Money Number"
              name="eMoneyNumber"
              placeholder="xxxx xxxx xxxx"
            />
            <Input label="E-Money Pin" name="eMoneyPin" placeholder="xxxx" />
          </>
        )}
        {ctx.currentValue === 'cash' && (
          <div className="checkoutForm__paymentDetails__cashParagraph">
            <Image
              src={'/cashOnDelivery-icon.svg'}
              alt="cash"
              width={50}
              height={50}
            />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
