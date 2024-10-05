import Category from '@/app/(shared)/Categories/Category';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

interface ModifiableCategoryProps {
  href: string;
  name: string;
}

export default function ModifiableCategory({
  href,
  name,
}: ModifiableCategoryProps) {
  return (
    <div className="modifiableCategory">
      <div className="modifiableCategory__actionDiv">
        <FaTrashAlt className="modifiableCategory__icon modifiableCategory__icon--delete" />
        <FaEdit className="modifiableCategory__icon modifiableCategory__icon--edit" />
      </div>
      <Category href={href} name={name} />
    </div>
  );
}
