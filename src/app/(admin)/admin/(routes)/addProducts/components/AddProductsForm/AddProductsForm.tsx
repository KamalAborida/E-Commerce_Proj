import ModifiableList from '@/app/(admin)/components/ModifiableList/ModifiableList';
import Toggler from '@/app/(admin)/components/Toggler/Toggler';
import Input from '@/app/(shared)/Input/Input';
import GeneralInptSection from '../GeneralInptSection/GeneralInptSection';
import ImagesInptSection from '../ImagesInptsSection/ImagesInptSection';
import InTheBoxInptSection from '../InTheBoxInptSection/InTheBoxInptSection';
import FeaturesInptSection from '../FeaturesInptSection/FeaturesInptSection';
import DescriptionInputSection from '../DescriptionInputSection/DescriptionInputSection';

export default async function AddProductsForm() {
  return (
    <form className="addProductsForm">
      <h1 className="addProductsForm__title">ADD PRODUCT</h1>
      <GeneralInptSection />
      <ImagesInptSection />
      <DescriptionInputSection />
      <InTheBoxInptSection />
      <FeaturesInptSection />
      <button className="btn btn-orange addProductsForm__btn">
        ADD PRODUCT +
      </button>
    </form>
  );
}
