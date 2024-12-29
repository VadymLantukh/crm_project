import React, { Fragment } from 'react';

export interface ILayoutCompaniesProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
}

const LayoutCompanies = ({
  children,
  header,
  toolbar,
  modal,
}: ILayoutCompaniesProps) => {
  return (
    <Fragment>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </Fragment>
  );
};

export default LayoutCompanies;
