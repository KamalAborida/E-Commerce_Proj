'use client';

import { useFormStatus } from 'react-dom';

export default function CategorySubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="btn btn-orange categoriesForm__btn"
    >
      {pending ? 'Submitting' : 'ADD CATEGORY +'}
    </button>
  );
}
