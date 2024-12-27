import Header from '@/app/components/header';
import { Fragment } from 'react';

export interface ICompaniesPageIdProps {
  params: { id: string };
}

const CompaniesPageId = ({ params }: ICompaniesPageIdProps) => {
  return (
    <Fragment>
      <Header>Company ({params.id})</Header>
    </Fragment>
  );
};

export default CompaniesPageId;
