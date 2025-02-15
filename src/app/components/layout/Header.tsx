import React from 'react';
import { useRouter } from 'next/router';
import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;