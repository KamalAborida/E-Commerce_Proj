import Product from '@/app/(shared)/Product/Product';
import { ProductType } from '@/app/(shared)/utils/types';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

interface ModifiableProductProps {
  product: ProductType;
}

export default function ModifiableProduct({ product }: ModifiableProductProps) {
  return (
    <div className="modifiableProduct">
      <Product product={product} />
      <div className="modifiableProduct__actionDiv">
        <button className="modifiableProduct__btn modifiableProduct__btn--delete">
          <FaTrashAlt />
          Delete
        </button>
        <button className="modifiableProduct__btn modifiableProduct__btn--edit">
          <FaEdit />
          Edit
        </button>
      </div>
    </div>
  );
}
