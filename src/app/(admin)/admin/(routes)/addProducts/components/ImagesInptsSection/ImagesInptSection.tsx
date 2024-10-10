import Input from '@/app/(shared)/Input/Input';

export default async function ImagesInptSection() {
  return (
    <section className="addProductsForm__section addProductsForm__imagesInpt">
      <Input
        name="previewImage"
        label="Preview Image"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be the main preview image for this product"
      />
      <Input
        name="largeImage"
        label="Collague Large Image"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be a part of the collague in the product details page (Large Image)"
      />
      <Input
        name="smallImage1"
        label="Small Image 1"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be a part of the collague in the product details page (Small Image)"
      />
      <Input
        name="smallImage2"
        label="Small Image 2"
        placeholder=""
        isFileInput={true}
        isInfoTip={true}
        infoTip="This image will be a part of the collague in the product details page (Small Image)"
      />
    </section>
  );
}
