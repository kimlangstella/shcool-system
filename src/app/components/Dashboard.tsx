'use client';

import {ForwardRefExoticComponent, ReactNode, RefAttributes, SVGProps, useState} from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  PhoneArrowUpRightIcon,
  ChevronUpIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  BuildingLibraryIcon,
  CheckBadgeIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Searchinput from './Searchinput';
import Image from 'next/image';

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
  icon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  subItems?: { name: string; href: string }[];
};

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Student',
    href: '#',
    current: false,
    icon: AcademicCapIcon,
    subItems: [
      { name: 'All Students', href: '/all-students' },
      { name: 'Add New Students', href: '/new-student' },
    ],
  },
  {
    name: 'Teacher',
    href: '#',
    current: false,
    icon: BookOpenIcon,
    subItems: [
      { name: 'All Teachers', href: '/all-teachers' },
      { name: 'New Teacher', href: '/new-teacher' },
    ],
  },
  {
    name: 'Program',
    href: '#',
    current: false,
    icon: ClipboardDocumentListIcon,
    subItems: [
      { name: 'All Programs', href: '/all-programs' },
      { name: 'New Programs', href: '/new-program' },
    ],
  },
  {
    name: 'Class',
    href: '#',
    current: false,
    icon: BuildingLibraryIcon,
    subItems: [
      { name: 'All Classes', href: '/all-classes' },
      { name: 'New Class', href: '/new-class' },
    ],
  },
  {
    name: 'Attendance',
    href: '#',
    current: false,
    icon: CheckBadgeIcon,
    subItems: [
      { name: 'Student Attendance', href: '/student-attendance' },
      { name: 'Teacher Attendance', href: '/teacher-attendance' },
    ],
  },
  { name: 'Setting', href: '#', icon: Cog6ToothIcon, current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleToggle = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />
          <div className="fixed inset-0 flex">
            <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <Image alt="public" src="/logo.png" width={100} height={100} className="h-8 w-auto" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                  href={item.href}
                                  className={classNames(
                                      item.current
                                          ? 'bg-indigo-700 text-white'
                                          : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                  )}
                              >
                                {item.icon && (
                                    <item.icon
                                        aria-hidden="true"
                                        className={classNames(
                                            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                            'h-6 w-6 shrink-0'
                                        )}
                                    />
                                )}
                                {item.name}
                              </a>
                            </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[232px] lg:flex-col ">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#213458] px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                  alt="Your Company"
                  src={'/logo.png'}
                  width={100}
                  height={100}
                  className="h-28 w-auto ml-9"
              />
            </div>

            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-5">
                    {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                              href={item.href}
                              onClick={() => handleToggle(item.name)}
                              className={classNames(
                                  item.current
                                      ? ' text-white'
                                      : 'text-indigo-200 hover:text-white',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 cursor-pointer',
                              )}
                          >
                            {item.icon && (
                                <item.icon
                                    aria-hidden="true"
                                    className={classNames(
                                        item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                        'h-6 w-6 shrink-0',
                                    )}
                                />
                            )}
                            {item.name}
                            {item.subItems && (
                                <span className="ml-auto">
                            {openMenu === item.name ? (
                                <MinusIcon className="h-5 w-5 text-white" />
                            ) : (
                                <PlusIcon className="h-5 w-5 text-white" />
                            )}
                          </span>
                            )}
                          </a>
                          {openMenu === item.name && item.subItems && (
                              <ul className="mt-2 space-y-2 pl-8">
                                {item.subItems.map((subItem) => (
                                    <li key={subItem.name}>
                                      <a
                                          href={subItem.href}
                                          className="text-indigo-200 hover:text-white text-sm font-semibold leading-6"
                                      >
                                        {subItem.name}
                                      </a>
                                    </li>
                                ))}
                              </ul>
                          )}
                        </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-52">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-[#213458] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 " />
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <button type="button" onClick={toggleSidebar} className=" text-gray-200">
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
              <form className="relative flex flex-1" action="#" method="GET">
                <Searchinput />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-200 hover:text-gray-300"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-200 hover:text-gray-300"
                >
                  <PhoneArrowUpRightIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />
                <Menu as="div" className="relative mr-2">
                  <MenuButton className="flex items-center mr-2 ">
                    <span className="sr-only">Open user menu</span>
                    <h1 className="text-white mr-3">stella</h1>
                    <Image
                        alt=""
                        src={'/photo.jpg'}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full bg-gray-800"
                    />
                  </MenuButton>
                </Menu>
              </div>
            </div>
          </div>
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
  );
};

export default Dashboard;
