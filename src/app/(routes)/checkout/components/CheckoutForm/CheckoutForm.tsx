import Input from '../Input/Input';
import RadioBtn from '../RadioBtn/RadioBtn';
import { RadioBtnContextProvider } from '../RadioBtn/radioBtns-context';
import BillingDetails from './BillingDetails';
import PaymentDetails from './PaymentDetails';
import ShippingInfo from './ShippingInfo';

export default function CheckoutForm() {
  return (
    <form className="checkoutForm">
      <h1 className="checkoutForm__title">Checkout</h1>
      <BillingDetails />
      <ShippingInfo />
      <RadioBtnContextProvider>
        <PaymentDetails />
      </RadioBtnContextProvider>
    </form>
  );
}
