"use client";
import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
  useState,
} from "react";
import { Menu, MenuButton } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  HomeIcon,
  PhoneArrowUpRightIcon,
  PlusIcon,
  MinusIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  BuildingLibraryIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import Searchinput from "./Searchinput";
import Image from "next/image";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
  icon?: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  subItems?: { name: string; href: string }[];
};

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Student",
    href: "#",
    current: false,
    icon: AcademicCapIcon,
    subItems: [
      { name: "All Students", href: "/students/all" },
      { name: "Add New Students", href: "/students/new" },
    ],
  },
  {
    name: "Teacher",
    href: "#",
    current: false,
    icon: BookOpenIcon,
    subItems: [
      { name: "All Teachers", href: "/teachers/all" },
      { name: "New Teachers", href: "/teachers/new" },
    ],
  },
  {
    name: "Class",
    href: "#",
    current: false,
    icon: BuildingLibraryIcon,
    subItems: [
      { name: "All Classes", href: "/classes/all" },
      { name: "New Class", href: "/classes/new" },
    ],
  },
  {
    name: "Program",
    href: "#",
    current: false,
    icon: ClipboardDocumentListIcon,
    subItems: [
      { name: "All Programs", href: "/programs/all" },
      { name: "New Programs", href: "/programs/new" },
    ],
  },
  {
    name: "Attendance",
    href: "#",
    current: false,
    icon: CheckBadgeIcon,
    subItems: [
      { name: "Student Attendance", href: "/attendance/students" },
      { name: "Teacher Attendance", href: "/attendance/teachers" },
    ],
  },
  { name: "Setting", href: "/settings",
     icon: Cog6ToothIcon,
     current: false ,
     subItems:[
      { name:"Account Setting",href: "/setting/general setting"},
      { name: "Logout" , href:"/logout"}
     ]
},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleToggle = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 top-[62px] w-[232px] bg-[#213458] z-40`}
      >
        <div className="flex flex-col gap-y-5 overflow-y-auto px-6 pb-4 mt-3">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-5">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => item.subItems && handleToggle(item.name)}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-indigo-200 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 cursor-pointer"
                        )}
                      >
                        {item.icon && (
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
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
      {/* Main content */}
      <div className="flex flex-col flex-grow">
        <div className="bg-[#213458] w-full h-16 fixed top-0 z-30">
          <div className="flex items-center h-16 justify-between px-4 shadow-sm">
            <div className="flex items-center ml-12 gap-16">
              <Image alt="Your Company" src="/logo.png" width={80} height={80} />
              <button
                type="button"
                onClick={toggleSidebar}
                className="text-gray-200 mr-4"
              >
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center gap-x-4 mr-[30px]">
              <Searchinput />
              <div className="ml-[320px] flex-row flex items-end gap-4">
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
                  <PhoneArrowUpRightIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
                <div aria-hidden="true" className="h-6 w-px ml-2 bg-gray-200" />
                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center">
                    <span className="sr-only">Open user menu</span>
                    <h1 className="text-white mr-3">Stella</h1>
                    <Image
                      alt=""
                      src="/photo.jpg"
                      className="h-8 w-8 rounded-full bg-gray-800"
                      width={20}
                      height={20}
                    />
                  </MenuButton>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <main className="px-12 h-full overflow-auto bg-[#F0F4FA]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
