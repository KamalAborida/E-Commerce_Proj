import ModifiableList from '@/app/(admin)/components/ModifiableList/ModifiableList';
import Input from '@/app/(shared)/Input/Input';
import { InputEventType } from '@/app/(shared)/utils/types';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

interface FeaturesInptSectionProps {
  handleFeatures: (event: InputEventType) => void;
  value: string;
}

export default function FeaturesInptSection({
  handleFeatures,
  value,
}: FeaturesInptSectionProps) {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addItemToList = () => {
    if (inputValue.trim()) {
      setList((prev) => [...prev, inputValue.trim()]);
      setInputValue(''); // Clear input after adding.
    }
  };

  const deleteItem = (itemText: string) => {
    const filteredList = list.filter((item) => {
      return item !== itemText;
    });

    setList(filteredList);
  };

  const handleInput = (event: InputEventType) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const syntheticEvent = {
      target: {
        value: list.toString(),
      },
    };

    handleFeatures(syntheticEvent as InputEventType);
  }, [handleFeatures, list]);

  useEffect(() => {
    const featureArray = value
      ? value.split(',').map((item) => item.trim())
      : [];
    setList(featureArray);
    setInputValue('');
  }, [value]);

  return (
    <section className="addProductsForm__section addProductsForm__features">
      <input hidden readOnly value={value} name="features" />
      <Input
        name="features"
        label="Features"
        placeholder="Ex. fast, bluetooth"
        isTextArea={true}
        onChange={handleInput}
        value={inputValue}
      />
      <ModifiableList>
        {list.length > 0 &&
          list.map((item) => {
            return (
              <ModifiableList.Item
                key={item}
                text={item}
                handleDelete={deleteItem}
              />
            );
          })}
        <button type="button" onClick={addItemToList}>
          <FaPlus />
        </button>
      </ModifiableList>
    </section>
  );
}
