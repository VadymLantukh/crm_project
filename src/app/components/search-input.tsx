'use client';

import Image from 'next/image';
import React from 'react';

export interface ISerachInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchInput = ({ onSearchClick, ...rest }: ISerachInputProps) => {
  return (
    <div className="realtive w-96">
      {' '}
      <input
        {...rest}
        type="text"
        className="text-sm flex-1 py-3 pr-11 pl-3 w-full h-11 rounded border border-gray-300 bg-gray-50"
      />
      <button
        type="button"
        className="absolute top-0 right-0 p-3"
        onClick={onSearchClick}
      >
        <Image
          width={20}
          height={20}
          src="/icons/magnifying-glass.svg"
          alt="secrch icon"
        />
      </button>
    </div>
  );
};

export default SearchInput;
