'use client';

import Button from '@/app/components/button';

export interface IErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: IErrorProps) => {
  return (
    <div>
      <p>{`Something went wrong ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default Error;
