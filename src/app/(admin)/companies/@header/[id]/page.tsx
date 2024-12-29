import Header from '@/app/components/header';

export interface IHeaderCompanyPageProps {
  params: { id: string };
}

const HeaderCompanyPage = ({ params }: IHeaderCompanyPageProps) => {
  return <Header>{`Company (${params.id})`}</Header>;
};

export default HeaderCompanyPage;
