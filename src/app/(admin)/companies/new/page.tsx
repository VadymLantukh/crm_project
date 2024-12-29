'use client';

import CompanyForm from '@/app/components/company-form';

const NewCompaniesPage = () => {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
};

export default NewCompaniesPage;
