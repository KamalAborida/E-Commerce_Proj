import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import SearchBox from './SearchBox';
import MinMaxFilter from './MinMaxFilter';
import SortDropDown from './SortDropDown';

interface ActionDivProps {
  setArrangementType: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
}

export default function ActionDiv({
  setArrangementType,
  setMaxValue,
  setMinValue,
  setSearchTerm,
}: ActionDivProps) {
  return (
    <div className="actionDiv">
      <SortDropDown setArrangementType={setArrangementType} />
      <SearchBox setSearchTerm={setSearchTerm} />
      <MinMaxFilter setMaxValue={setMaxValue} setMinValue={setMinValue} />
    </div>
  );
}
