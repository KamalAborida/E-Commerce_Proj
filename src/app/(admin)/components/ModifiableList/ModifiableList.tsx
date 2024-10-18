import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Use any icon library

interface ModifiableListProps {
  children: React.ReactNode;
}

interface ModifiableListItemProps {
  text: string;
  handleDelete: (itemText: string) => void;
}

function ModifiableList({ children }: ModifiableListProps) {
  return <ul className="modifiableList">{children}</ul>;
}

function ModifiableListItem({ text, handleDelete }: ModifiableListItemProps) {
  const deleteItem = (event: React.MouseEvent<any>) => {
    event.preventDefault();
    event.stopPropagation();
    handleDelete(text);
  };

  return (
    <li className="modifiableList__item">
      <p className="modifiableList__text">{text}</p>
      <button type="button" onClick={deleteItem}>
        <FaTrashAlt className="modifiableList__icon" />
      </button>
    </li>
  );
}

ModifiableList.Item = ModifiableListItem;

export default ModifiableList;
