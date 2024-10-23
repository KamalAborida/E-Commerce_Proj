import Product from '@/app/shared/Product/Product';
import { ProductType } from '@/app/shared/utils/types';
import { useFormState, useFormStatus } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteProductAction } from '../../utils/deleteProductAction';

interface DeleteButtonProps {
  action: (payload: FormData) => void;
  id: number;
}

export default function DeleteButton({ action, id }: DeleteButtonProps) {
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <button
        className="modifiableProduct__btn modifiableProduct__btn--delete"
        disabled={pending}
        role="deleteButton"
      >
        <FaTrashAlt />
        {pending ? 'Pending...' : 'Delete'}
      </button>
      <input hidden value={id} name="id" readOnly />
    </form>
  );
}
