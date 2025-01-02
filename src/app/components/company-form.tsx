'use client';

import { Formik, Form } from 'formik';
import LogoUpload from './logo-upload';
import InputField from './input-field';
import Button from './button';
import {
  CompanyStatus,
  createCompany,
  getCategories,
  getCountries,
} from '../lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import StatusLabel from './status-label';

export type TCompanyFieldValues = {
  title: string;
  status: CompanyStatus;
  joinedDate: string;
  categoryId: string;
  countryId: string;
  description: string;
};

const initialValues: TCompanyFieldValues = {
  title: '',
  description: '',
  status: CompanyStatus.Active,
  countryId: '',
  categoryId: '',
  joinedDate: '',
};

export interface ICompanyFormProps {
  onSubmit?: (values: TCompanyFieldValues) => void | Promise<void>;
}

const CompanyForm = ({ onSubmit }: ICompanyFormProps) => {
  const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 10 * 1000,
  });

  const { data: countries } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    staleTime: 10 * 1000,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });
    },
  });

  const handleSubmit = async (values: TCompanyFieldValues) => {
    await mutateAsync({
      ...values,
      categoryTitle:
        categories?.find(({ id }) => id === values.categoryId)?.title ?? '',
      countryTitle:
        countries?.find(({ id }) => id === values.countryId)?.title ?? '',
    });

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUpload label="Logo" placeholder="Upload photo" />
            <InputField
              required
              label="Status"
              placeholder="Status"
              name="status"
              as="select"
            >
              {(Object.values(CompanyStatus) as CompanyStatus[]).map(
                (status) => (
                  <option key={status} value={status}>
                    <StatusLabel status={status} styled={false} />
                  </option>
                ),
              )}
            </InputField>
            <InputField
              required
              as="select"
              label="Country"
              placeholder="Country"
              name="country"
            >
              {countries?.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.title}
                </option>
              ))}
            </InputField>
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField required label="Name" placeholder="Name" name="title" />
            <InputField
              required
              label="Category"
              placeholder="Category"
              name="categoryId"
              as="select"
            >
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </InputField>
            <InputField
              required
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Add company
        </Button>
      </Form>
    </Formik>
  );
};

export default CompanyForm;
