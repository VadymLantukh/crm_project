import { Fragment } from 'react';

import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';
import { getSummaryPromotions } from '@/app/lib/api';

const PromotionsPage = async () => {
  const data = await getSummaryPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <Fragment>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </Fragment>
        }
      >
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
};

export default PromotionsPage;
