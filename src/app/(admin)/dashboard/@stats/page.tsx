import StatCard, { StatCardType } from '@/app/components/stat-card';
import { getSummaryStats, ISummaryStats } from '@/app/lib/api';

import Link from 'next/link';

const labelByStat: Record<keyof ISummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

const StatsPage = async () => {
const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof ISummaryStats)[]).map((key) => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </Link>
      ))}
    </div>
  );
};

export default StatsPage;
