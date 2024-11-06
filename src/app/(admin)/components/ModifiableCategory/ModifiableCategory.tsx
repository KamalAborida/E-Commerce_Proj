'use client';

import Category from '@/app/shared/Categories/Category';
import { useFormState } from 'react-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteCategoryAction } from '../../utils/deleteCategoryAction';
import DeleteIcon from './DeleteIcon';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { dataActions } from '@/lib/features/cart/data-slice';

interface ModifiableCategoryProps {
  href: string;
  name: string;
  id: number;
  image: string;
}

export default function ModifiableCategory({
  href,
  name,
  id,
  image,
}: ModifiableCategoryProps) {
  const [state, action] = useFormState(deleteCategoryAction, {});
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (state.isSubmitted && state.isSubmitted.value) {
      dispatch(dataActions.setCategories([...state.data]));
    }
  }, [dispatch, state.data, state.isSubmitted]);

  return (
    <div className="modifiableCategory">
      <div className="modifiableCategory__actionDiv">
        <DeleteIcon action={action} id={id} />
        <FaEdit
          role="editIcon"
          className="modifiableCategory__icon modifiableCategory__icon--edit"
        />
      </div>
      <Category href={href} name={name} image={image} />
    </div>
  );
}
