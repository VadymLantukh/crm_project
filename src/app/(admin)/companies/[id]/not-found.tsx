import Link from 'next/link';
import { Fragment } from 'react';

const NotFoundPage = () => {
  return (
    <Fragment>
      <p>Could not found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </Fragment>
  );
};

export default NotFoundPage;
