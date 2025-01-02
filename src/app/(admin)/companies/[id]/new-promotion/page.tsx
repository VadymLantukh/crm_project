'use client';

import { use } from 'react';
import PromotionForm from '@/app/components/promotion-form';

const NewPromotionPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
};

export default NewPromotionPage;
