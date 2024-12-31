import CompanyTable from '../../components/company-table';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { getCompanies } from '@/app/lib/api';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const CompaniesPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
};

export default CompaniesPage;
