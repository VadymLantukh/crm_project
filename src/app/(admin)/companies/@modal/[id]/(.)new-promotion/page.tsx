'use client';

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

interface PageProps {
  params: {
    id: string;
  };
}

const ModalNewPromotionPage = ({ params }: PageProps) => {
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
