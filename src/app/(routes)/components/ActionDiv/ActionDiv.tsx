import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import SearchBox from './SearchBox';
import MinMaxFilter from './MinMaxFilter';
import SortDropDown from './SortDropDown';

interface ActionDivProps {
  setArrangmentType: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
}

export default function ActionDiv({
  setArrangmentType,
  setMaxValue,
  setMinValue,
  setSearchTerm,
}: ActionDivProps) {
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setArrangmentType(event.currentTarget.value);
  };

  return (
    <div className="actionDiv">
      <SortDropDown setArrangmentType={setArrangmentType} />
      <SearchBox setSearchTerm={setSearchTerm} />
      <MinMaxFilter setMaxValue={setMaxValue} setMinValue={setMinValue} />
    </div>
  );
}
