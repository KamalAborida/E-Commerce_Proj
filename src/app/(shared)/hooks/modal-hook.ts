import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { disableScrolling, enableScrolling } from '../utils/windowFunctions';

export function useModal(modalSearchParam: string, closeDestination: string) {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get(modalSearchParam);

  const router = useRouter();

  const [modal, setModal] = useState(false);

  const closeModal = useCallback(() => {
    setModal(false);
    enableScrolling();
    router.push(`/${closeDestination}`);
  }, [closeDestination, router]);

  const openModal = useCallback(() => {
    setModal(true);
    disableScrolling();
  }, []);

  const openModalInMobile = useCallback(() => {
    setModal(true);
    enableScrolling();
  }, []);

  return {
    closeModal,
    modal,
    setModal,
    searchParam,
    openModal,
    openModalInMobile,
  };
}
