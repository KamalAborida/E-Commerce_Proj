interface inputProps {
  label: string;
  placeholder: string;
  name: string;
}

export default function Input({ label, placeholder, name }: inputProps) {
  return (
    <div className="inputDiv">
      <label className="inputDiv__label">{label}</label>
      <input
        className="inputDiv__input"
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
}
