import Input from '@/app/(shared)/Input/Input';
import { InputEventType } from '@/app/(shared)/utils/types';

interface ImagesInptSectionProps {
  values: { [key: string]: any };
  isTouched: { [key: string]: boolean };
  errors: { [key: string]: string };
  handleCollagueLargeImg: (event: InputEventType) => void;
  handleCollagueSmall1Img: (event: InputEventType) => void;
  handleCollagueSmall2Img: (event: InputEventType) => void;
  handlePreviewImg: (event: InputEventType) => void;
}

export default function ImagesInptSection({
  values,
  isTouched,
  errors,
  handleCollagueLargeImg,
  handleCollagueSmall1Img,
  handleCollagueSmall2Img,
  handlePreviewImg,
}: ImagesInptSectionProps) {
  return (
    <section className="addProductsForm__section addProductsForm__imagesInpt">
      <Input
        name="previewImage"
        label="Preview Image"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be the main preview image for this product"
        value={values.previewImg}
        onChange={handlePreviewImg}
      />
      <Input
        name="largeImage"
        label="Collague Large Image"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be a part of the collague in the product details page (Large Image)"
        value={values.collagueLargeImg}
        onChange={handleCollagueLargeImg}
      />
      <Input
        name="smallImage1"
        label="Small Image 1"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be a part of the collague in the product details page (Small Image)"
        value={values.collagueSmall1Img}
        onChange={handleCollagueSmall1Img}
      />
      <Input
        name="smallImage2"
        label="Small Image 2"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be a part of the collague in the product details page (Small Image)"
        value={values.collagueSmall2Img}
        onChange={handleCollagueSmall2Img}
      />
    </section>
  );
}
