import Input from '@/app/(shared)/Input/Input';

export default async function CategoriesForm() {
  return (
    <form className="categoriesForm">
      <h1 className="categoriesForm__title">CATEGORY</h1>
      <section className="categoriesForm__inptsSection">
        <Input label="Category Name" placeholder="Speakers" name="name" />
        <Input
          label="Preview Image"
          placeholder=""
          name="previewImage"
          isFileInput={true}
          isInfoTip={true}
          infoTip="This is the image that will be shown when previewing the category"
        />
        <Input
          label="SVG Image"
          placeholder=""
          name="svgImage"
          isFileInput={true}
          isInfoTip={true}
          infoTip="This should be an image with no background, It will be used to make a category card for navigation"
        />
      </section>
      <button className="btn btn-orange categoriesForm__btn">
        CREATE CATEGORY
      </button>
    </form>
  );
}
