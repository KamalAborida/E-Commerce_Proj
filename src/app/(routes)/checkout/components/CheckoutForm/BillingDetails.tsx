import Input from '../Input/Input';
import RadioBtn from '../RadioBtn/RadioBtn';

export default function BillingDetails() {
  return (
    <div className="checkoutForm__billingDetails checkoutForm__subDiv">
      <h1 className="checkoutForm__subTitle">BILLING DETAILS</h1>
      <div className="checkoutForm__billingDetails__inputsDiv">
        <Input label="Name" name="name" placeholder="Alexi Ward" />
        <Input label="Email" name="email" placeholder="Alexi@xxx.com" />
        <Input label="Phone" name="phone" placeholder="+20 00011100055" />
      </div>
    </div>
  );
}
