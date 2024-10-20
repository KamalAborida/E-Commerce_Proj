'use client';

import Category from '@/app/shared/Categories/Category';
import { useFormState } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteCategoryAction } from '../../utils/deleteCategoryAction';
import { useEffect } from 'react';

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
        <form action={action}>
          <button type="submit">
            <FaTrashAlt className="modifiableCategory__icon modifiableCategory__icon--delete" />
          </button>
          <input hidden value={id} name="id" readOnly />
        </form>
        <FaEdit className="modifiableCategory__icon modifiableCategory__icon--edit" />
      </div>
      <Category href={href} name={name} />
    </div>
  );
}
