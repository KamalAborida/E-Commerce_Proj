import Link from 'next/link';

export default function ActionDiv() {
  return (
    <div className="actionDiv">
      <Link className="actionDiv__goBack" href={'#'}>
        Go Back
      </Link>
      <Link className="actionDiv__goBack" href={'#'}>
        Go Back
      </Link>
    </div>
  );
}
