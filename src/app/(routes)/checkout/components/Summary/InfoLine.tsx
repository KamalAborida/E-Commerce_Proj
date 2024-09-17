interface infoLineProps {
  isOrange: boolean;
  label: string;
  value: string;
}

export default function InfoLine({ isOrange, label, value }: infoLineProps) {
  return (
    // total or not
    <div
      className={`${isOrange ? 'summary__infoLine-orange' : 'summary__infoLine'}`}
    >
      <p>{label}</p>
      <p>{value}$</p>
    </div>
  );
}
