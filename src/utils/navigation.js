import {
  UsersIcon,
  DocumentReportIcon,
  DatabaseIcon,
} from "@heroicons/react/solid";

export const mainNavigationLinks = [
  {
    name: "Overview",
    href: "overview",
    icon: <DocumentReportIcon className="h-6 w-6" />,
  },
  { name: "Users", href: "users", icon: <UsersIcon className="h-6 w-6" /> },
  {
    name: "Products",
    href: "products",
    icon: <DatabaseIcon className="h-6 w-6" />,
  },
];
