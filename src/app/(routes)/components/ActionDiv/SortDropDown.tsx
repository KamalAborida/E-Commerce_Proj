// 'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  ASCENDING,
  DESCENDING,
} from '../../category/components/Products/utils';

interface SortDropDownProps {
  setArrangementType: Dispatch<SetStateAction<string>>;
}

export default function SortDropDown({
  setArrangementType,
}: SortDropDownProps) {
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setArrangementType(event.currentTarget.value);
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
