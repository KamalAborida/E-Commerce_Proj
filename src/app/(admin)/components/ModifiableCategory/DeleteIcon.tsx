'use client';

import Category from '@/app/shared/Categories/Category';
import { useFormState } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteCategoryAction } from '../../utils/deleteCategoryAction';
import { useEffect } from 'react';

interface DeleteIconProps {
  action: (payload: FormData) => void;
  id: number;
}

export default function DeleteIcon({ action, id }: DeleteIconProps) {
  return (
    <form action={action}>
      <button role="deleteBtn">
        <FaTrashAlt className="modifiableCategory__icon modifiableCategory__icon--delete" />
      </button>
      <input hidden value={id} name="id" readOnly />
    </form>
  );
}
