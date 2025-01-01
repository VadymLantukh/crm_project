'use client';

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

type PageProps = {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

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
