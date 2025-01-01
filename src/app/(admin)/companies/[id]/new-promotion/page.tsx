'use client';

import PromotionForm from '@/app/components/promotion-form';

export interface INewPromotionPageProps {
  params: {
    id: string;
  };
}

const NewPromotionPage = ({ params }: INewPromotionPageProps) => {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
};

export default NewPromotionPage;
