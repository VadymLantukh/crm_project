'use client';

import { useRouter } from 'next/navigation';

import CompanyFormModal from '@/app/components/company-form-modal';

const ModalNewCompanyPage = () => {
  const router = useRouter();

  return <CompanyFormModal show={true} onClose={() => router.back()} />;
};

export default ModalNewCompanyPage;
