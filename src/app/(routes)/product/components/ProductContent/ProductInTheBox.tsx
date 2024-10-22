interface ProductInTheBoxProps {
  inTheBox: string;
}

export default function ProductInTheBox({ inTheBox }: ProductInTheBoxProps) {
  const inTheBoxList: { item: string; quantity: number }[] =
    JSON.parse(inTheBox);

  return (
    <div className="productContent__inTheBox">
      <h2 className="productContent__inTheBox__title">IN THE BOX</h2>
      <ul className="productContent__inTheBox__list">
        {inTheBoxList &&
          inTheBoxList.map((boxItem) => {
            return (
              <li
                className="productContent__inTheBox__list__item"
                key={boxItem.item}
              >
                {boxItem.item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
