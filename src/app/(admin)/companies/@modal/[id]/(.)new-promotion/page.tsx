'use client';

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface IModalNewPromotionPage {
  params: {
    id: string;
  };
}

const ModalNewPromotionPage = ({ params }: IModalNewPromotionPage) => {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default ModalNewPromotionPage;
