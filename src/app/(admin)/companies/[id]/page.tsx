import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import CompanyInfo from '@/app/components/company-info';
import CompanyPromotions from '@/app/components/company-promotions';
import { getCompany, getPromotions, ICompany } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';

export interface ICompaniesPageIdProps {
  params: { id: string };
}

const CompaniesPageId = async ({ params }: ICompaniesPageIdProps) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', params.id],
    queryFn: () =>
      getPromotions({ companyId: params.id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData([
    'companies',
    params.id,
  ]) as ICompany;

  if (!company) notFound();

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={params.id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default CompaniesPageId;
