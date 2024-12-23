'use client';

import { useFormStatus } from 'react-dom';

export default function ProductSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="btn btn-orange addProductsForm__btn"
    >
      {pending ? 'Submitting' : 'ADD PRODUCT +'}
    </button>
  );
}
