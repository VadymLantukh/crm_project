import Header from '@/app/components/header';
import { getCompany, ICompany } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';

export interface IHeaderCompanyPageProps {
  params: { id: string };
}

const HeaderCompanyPage = async ({ params }: IHeaderCompanyPageProps) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData([
    'companies',
    params.id,
  ]) as ICompany;

  return <Header>{company.title}</Header>;
};

export default HeaderCompanyPage;
