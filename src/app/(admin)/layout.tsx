import React, { Fragment } from 'react';
import SideBar from '../components/sidebar';

export interface ILayoutAdminProps {
  children: React.ReactNode;
}

const LayoutAdmin = ({ children }: ILayoutAdminProps) => {
  return (
    <Fragment>
      <SideBar />
      <div className="ml-60">{children}</div>
    </Fragment>
  );
};

export default LayoutAdmin;
