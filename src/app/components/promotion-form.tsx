'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPromotion, getCompany } from '../lib/api';
import { Form, Formik } from 'formik';
import InputField from './input-field';
import LogoUpload from './logo-upload';
import Button from './button';

export interface IPromotionField {
  title: string;
  description: string;
  discount: string;
}

export interface IPromotionFormProps {
  companyId: string;
  onSubmit?: (values: IPromotionField) => void | Promise<void>;
}

const initialValues: IPromotionField = {
  title: '',
  description: '',
  discount: '',
};

const PromotionForm = ({ companyId, onSubmit }: IPromotionFormProps) => {
  const queryClient = useQueryClient();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
    enabled: Boolean(companyId),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPromotion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promotions', companyId],
      });

      queryClient.invalidateQueries({
        queryKey: ['promotions'],
        exact: true,
      });
    },
  });

  const handleSubmit = async (values: IPromotionField) => {
    await mutateAsync({
      ...values,
      discount: Number(values.discount) || 0,
      companyId: company?.id ?? '',
      companyTitle: company?.title ?? '',
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new promotion</p>
        <div className="flex flex-col gap-5">
          <InputField required label="Title" placeholder="Title" name="title" />
          <InputField
            required
            label="Description"
            placeholder="Description"
            name="description"
          />
          <InputField
            required
            type="number"
            label="Discount"
            placeholder="Discount"
            name="discount"
          />
          <LogoUpload square label="Image" placeholder="Upload photo" />
        </div>
        <Button type="submit" disabled={isPending}>
          Add promotion
        </Button>
      </Form>
    </Formik>
  );
};

export default PromotionForm;
