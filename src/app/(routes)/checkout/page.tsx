import ActionDiv from '../components/ActionDiv/ActionDiv';
import ProductPageBackground from '../product/components/ProductPageBackground/ProductPageBackground';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Input from '../../shared/Input/Input';
import RadioBtn from './components/RadioBtn/RadioBtn';
import Summary from './components/Summary/Summary';

export default function Checkout() {
  return (
    <main>
      <ProductPageBackground />
      <div className="checkoutBackground"></div>
      <div className="mainContent">
        <CheckoutForm />
        <Summary />
      </div>
    </main>
  );
}
