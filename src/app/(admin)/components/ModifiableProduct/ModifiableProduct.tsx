import Product from '@/app/shared/Product/Product';
import { ProductType } from '@/app/shared/utils/types';
import { useFormState } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteProductAction } from '../../utils/deleteProductAction';
import DeleteButton from './DeleteButton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { useEffect } from 'react';
import { dataActions } from '@/lib/features/cart/data-slice';

interface ModifiableProductProps {
  product: ProductType;
}

export default function ModifiableProduct({ product }: ModifiableProductProps) {
  const [state, action] = useFormState(deleteProductAction, null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (state.isSubmitted && state.isSubmitted.value) {
      dispatch(dataActions.setProducts([...state.data]));
    }
  }, [dispatch, state.data, state.isSubmitted]);

  return (
    <div className="modifiableProduct">
      <Product product={product} />
      <div className="modifiableProduct__actionDiv">
        <DeleteButton action={action} id={product.id} />
        <button className="modifiableProduct__btn modifiableProduct__btn--edit">
          <FaEdit />
          Edit
        </button>
      </div>
    </div>
  );
}
