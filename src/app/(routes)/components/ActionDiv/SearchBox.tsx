// 'use client';

import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface SearchBoxProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function SearchBox({ setSearchTerm }: SearchBoxProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <div className="actionDiv__searchBox">
      <input
        className="actionDiv__searchBox__inpt"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
}
