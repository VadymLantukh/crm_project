'use client';

import Modal, { IModalProps } from './modal';
import PromotionForm from './promotion-form';

export interface IPromotionFormModalProps extends IModalProps {
  companyId: string;
}

const PromotionFormModal = ({
  companyId,
  onClose,
  ...rest
}: IPromotionFormModalProps) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
};

export default PromotionFormModal;
