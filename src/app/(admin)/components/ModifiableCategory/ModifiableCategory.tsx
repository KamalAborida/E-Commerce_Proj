'use client';

import Category from '@/app/shared/Categories/Category';
import { useFormState } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteCategoryAction } from '../../utils/deleteCategoryAction';
import DeleteIcon from './DeleteIcon';

interface ModifiableCategoryProps {
  href: string;
  name: string;
  id: number;
}

export default function ModifiableCategory({
  href,
  name,
  id,
}: ModifiableCategoryProps) {
  const [state, action] = useFormState(deleteCategoryAction, null);

  return (
    <div className="modifiableCategory">
      <div className="modifiableCategory__actionDiv">
        <DeleteIcon action={action} id={id} />
        <FaEdit
          role="editIcon"
          className="modifiableCategory__icon modifiableCategory__icon--edit"
        />
      </div>
      <Category href={href} name={name} />
    </div>
  );
}
