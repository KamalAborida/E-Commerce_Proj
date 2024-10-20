import Product from '@/app/shared/Product/Product';
import { ProductType } from '@/app/shared/utils/types';
import { useFormState } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteProductAction } from '../../utils/deleteProductAction';

interface ModifiableProductProps {
  product: ProductType;
}

export default function ModifiableProduct({ product }: ModifiableProductProps) {
  const [state, action] = useFormState(deleteProductAction, null);

  return (
    <div className="modifiableProduct">
      <Product product={product} />
      <div className="modifiableProduct__actionDiv">
        <form action={action}>
          <button className="modifiableProduct__btn modifiableProduct__btn--delete">
            <FaTrashAlt />
            Delete
          </button>
          <input hidden value={product.id} name="id" readOnly />
        </form>
        <button className="modifiableProduct__btn modifiableProduct__btn--edit">
          <FaEdit />
          Edit
        </button>
      </div>
    </div>
  );
}
