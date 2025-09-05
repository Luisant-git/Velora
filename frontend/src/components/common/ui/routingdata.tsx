import { lazy } from "react";

// Import new Velora components
const Dashboard = lazy(() => import("../../../pages/velora/dashboard/Dashboard"));
const ItemMaster = lazy(() => import("../../../pages/velora/master/ItemMaster"));
const CustomerMaster = lazy(() => import("../../../pages/velora/master/CustomerMaster"));
const CategoryMaster = lazy(() => import("../../../pages/velora/master/CategoryMaster"));
const TaxMaster = lazy(() => import("../../../pages/velora/master/TaxMaster"));
const UnitMaster = lazy(() => import("../../../pages/velora/master/UnitMaster"));
const SalesEntry = lazy(() => import("../../../pages/velora/transactions/SalesEntry"));
const SalesReport = lazy(() => import("../../../pages/velora/reports/SalesReport"));
const UserManagement = lazy(() => import("../../../pages/velora/users/UserManagement"));
const Profile = lazy(() => import("../../header/Profile"));


export const Routedata = [
  // New Velora Routes
  { id: 1, path: ``, element: <Dashboard /> },
  { id: 2, path: `dashboard`, element: <Dashboard /> },
  { id: 3, path: `item-master`, element: <ItemMaster /> },
  { id: 4, path: `customer-master`, element: <CustomerMaster /> },
  { id: 5, path: `category-master`, element: <CategoryMaster /> },
  { id: 6, path: `tax-master`, element: <TaxMaster /> },
  { id: 7, path: `unit-master`, element: <UnitMaster /> },
  { id: 8, path: `sales-entry`, element: <SalesEntry /> },
  { id: 9, path: `sales-report`, element: <SalesReport /> },
  { id: 10, path: `user-management`, element: <UserManagement /> },
  { id: 11, path: `profile`, element: <Profile /> },

];
