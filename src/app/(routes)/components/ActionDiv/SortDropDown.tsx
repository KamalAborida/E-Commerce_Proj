import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  ASCENDING,
  DESCENDING,
} from '../../category/components/Products/utils';

interface SortDropDownProps {
  setArrangmentType: Dispatch<SetStateAction<string>>;
}

export default function SortDropDown({ setArrangmentType }: SortDropDownProps) {
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setArrangmentType(event.currentTarget.value);
  };

  return (
    <div className="actionDiv__sort">
      <select
        className="actionDiv__sort__dropDOwn"
        onChange={handleSort}
        defaultValue={'Sort By'}
      >
        <option disabled>Sort By</option>
        <option value={ASCENDING}>Ascending price</option>
        <option value={DESCENDING}>Descending price</option>
      </select>
    </div>
  );
}
