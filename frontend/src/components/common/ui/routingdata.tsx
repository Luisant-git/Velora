import { lazy } from "react";

// Import new Velora components
const Dashboard = lazy(() => import("../../../pages/velora/dashboard/Dashboard"));
const ItemMaster = lazy(() => import("../../../pages/velora/master/ItemMaster"));
const CustomerMaster = lazy(() => import("../../../pages/velora/master/CustomerMaster"));
const SalesEntry = lazy(() => import("../../../pages/velora/transactions/SalesEntry"));
const SalesReport = lazy(() => import("../../../pages/velora/reports/SalesReport"));
const UserManagement = lazy(() => import("../../../pages/velora/users/UserManagement"));


export const Routedata = [
  // New Velora Routes
  { id: 1, path: ``, element: <Dashboard /> },
  { id: 2, path: `dashboard`, element: <Dashboard /> },
  { id: 3, path: `item-master`, element: <ItemMaster /> },
  { id: 4, path: `customer-master`, element: <CustomerMaster /> },
  { id: 5, path: `sales-entry`, element: <SalesEntry /> },
  { id: 6, path: `sales-report`, element: <SalesReport /> },
  { id: 7, path: `user-management`, element: <UserManagement /> },

];
