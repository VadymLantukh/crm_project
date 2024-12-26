'use client';

import { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';

import Button from './button';
const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButtom = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setIsShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={isShow}
        onClose={() => setIsShow(false)}
      />
    </Fragment>
  );
};

export default AddCompanyButtom;
