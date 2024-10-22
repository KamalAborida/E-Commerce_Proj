export interface CategoryType {
  id: number;
  name: string;
  previewImage: string;
}

export interface ProductType {
  id: number;
  name: string;
  isNew: number;
  price: number;
  previewImage: string;
  features: string;
  description: string;
  inTheBox: string;
  images: string;
  categoryId: number;
}

export type imageListType = { smallImages: string[]; largeImage: string };

export interface CartProductType extends ProductType {
  quantity: number;
}

export interface AdminType {
  id: number;
  username: string;
  password: string;
}

export interface imagesArrayType {
  previewImage: File;
  largeImage: File;
  smallImage1: File;
  smallImage2: File;
}

export type InputEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;
