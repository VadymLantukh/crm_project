import { Fragment } from 'react';

import Header from '../components/header';
import Toolbar from '../components/toolbar';
import AddCompanyButtom from '../components/add-company-button';
import SearchInput from '../components/search-input';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '../components/status-label';

const CompaniesPage = () => {
  return (
    <Fragment>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButtom />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category='Products'
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </Fragment>
  );
};

export default CompaniesPage;
