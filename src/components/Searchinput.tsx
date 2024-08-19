import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Searchinput = () => {
  return (
    <div className="flex items-center border w-[421px] border-gray-300 gap-[162px] p-2 m-3 rounded-md">
      <input
        type="text"
        className="ml-2 outline-none border-none bg-transparent text-gray-200 placeholder-gray-300 w-[300px]"
        placeholder="Search..."
        style={{ width: '210px' }}
      />
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-300" />
    </div>
  );
};

export default Searchinput;
