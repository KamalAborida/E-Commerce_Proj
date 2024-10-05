import { FaTrashAlt } from 'react-icons/fa'; // Use any icon library

interface ModifiableListProps {
  children: React.ReactNode;
}

interface ModifiableListItemProps {
  text: string;
}

function ModifiableList({ children }: ModifiableListProps) {
  return <ul className="modifiableList">{children}</ul>;
}

function ModifiableListItem({ text }: ModifiableListItemProps) {
  return (
    <li className="modifiableList__item">
      <p className="modifiableList__text">{text}</p>
      <FaTrashAlt className="modifiableList__icon" />
    </li>
  );
}

ModifiableList.Item = ModifiableListItem;

export default ModifiableList;
