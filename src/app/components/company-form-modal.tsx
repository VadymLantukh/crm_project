'use client';

import CompanyForm, { ICompanyFormProps } from './company-form';
import Modal, { IModalProps } from './modal';

export interface ICompanyFormModalProps extends IModalProps {
  onSubmit?: ICompanyFormProps['onSubmit'];
}

const CompanyFormModal = ({ onClose, ...rest }: ICompanyFormModalProps) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
};

export default CompanyFormModal;
