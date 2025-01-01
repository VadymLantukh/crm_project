'use client';

import Button from './button';
import { useRouter } from 'next/navigation';

const AddCompanyButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
};

export default AddCompanyButton;
