'use client';

import CompanyForm, { ICompanyFormProps } from './company-form';
import Modal, { IModalProps } from './modal';

export interface ICompanyFormModalProps extends IModalProps {
  onSubmit: ICompanyFormProps['onSubmit'];
}

const CompanyFormModal = ({ onSubmit, ...rest }: ICompanyFormModalProps) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
