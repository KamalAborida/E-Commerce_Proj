'use client';

import { useState } from 'react';

export default function InfoTip({ infoTip }: { infoTip: string }) {
  const [showTip, setShowTip] = useState(false);

  const toggleTip = (status: boolean) => setShowTip(status);

  return (
    <>
      {showTip && <p className="inputDiv__tipModal">{infoTip}</p>}
      <button
        className="inputDiv__tipCta"
        onMouseEnter={toggleTip.bind(null, true)}
        onMouseLeave={toggleTip.bind(null, false)}
      >
        i
      </button>
    </>
  );
}
