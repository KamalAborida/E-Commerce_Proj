import { SetStateAction } from 'react';

export function disableScrolling() {
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

export function enableScrolling() {
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
}

export function handleWindow(
  setScreenWidth: (value: SetStateAction<number | null>) => void
) {
  if (typeof window !== 'undefined') {
    setScreenWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }
}
