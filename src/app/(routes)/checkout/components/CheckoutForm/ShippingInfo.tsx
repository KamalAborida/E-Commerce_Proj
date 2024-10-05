import Input from '../../../../(shared)/Input/Input';

export default function ShippingInfo() {
  return (
    <div className="checkoutForm__shippingInfo checkoutForm__subDiv">
      <h1 className="checkoutForm__subTitle">SHIPPING INFO</h1>
      <div className="checkoutForm__shippingInfo__inputsDiv">
        <Input label="Address" name="address" placeholder="Alexi Ward st." />
        <Input label="ZIP Code" name="zip" placeholder="22022" />
        <Input label="City" name="city" placeholder="Alexandria" />
        <Input label="Country" name="country" placeholder="Egypt" />
      </div>
    </div>
  );
}
