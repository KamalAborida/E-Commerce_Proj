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

export interface CartProductType extends ProductType {
  quantity: number;
}

export interface AdminType {
  id: number;
  username: string;
  password: string;
}
