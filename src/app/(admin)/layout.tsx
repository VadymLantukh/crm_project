import React, { Fragment } from 'react';
import Sidebar from '../components/sidebar';

export interface ILayoutAdminProps {
  children: React.ReactNode;
}

const LayoutAdmin = ({ children }: ILayoutAdminProps) => {
  return (
    <Fragment>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </Fragment>
  );
};

export default LayoutAdmin;
