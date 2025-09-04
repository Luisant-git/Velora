import { lazy } from "react";
import Sales from "../../../container/dashboard/sales/sales";

// Import all components lazily
const Party = lazy(() => import("../../../pages/view/party/party"));
const AddParty = lazy(() => import("../../../pages/view/party/AddParty"));
const UpdateParty = lazy(() => import("../../../pages/view/party/Updateparty"));
const Quotation = lazy(() => import("../../../pages/view/quotation/Quotation"));
const AddQuotation = lazy(() => import("../../../pages/view/quotation/AddQuotation"));
const UpdateQuotation = lazy(() => import("../../../pages/view/quotation/UpdateQuotation"));
const ClothDec = lazy(() => import("../../../pages/view/master/ClothDec"));
const Color = lazy(() => import("../../../pages/view/master/color/Color"));
const Uom = lazy(() => import("../../../pages/view/master/uom/Uom"));
const Dia = lazy(() => import("../../../pages/view/master/dia/Dia"));
const Item = lazy(() => import("../../../pages/view/master/item/Item"));
const SaleEntry = lazy(() => import("../../../pages/view/master/saleEntries/SaleEntry"));
const AddSaleEntry = lazy(() => import("../../../pages/view/master/saleEntries/AddSaleEntry"));
const PurchaseEntry = lazy(() => import("../../../pages/view/master/purchaseEntry/PurchaseEntry"));
const AddPurchaseEntry = lazy(() => import("../../../pages/view/master/purchaseEntry/AddPurchaseEntry"));
const Customer = lazy(() => import("../../../pages/view/master/customer/Customer"));
const FinancialYears = lazy(() => import("../../../pages/view/master/financial/FinancialYears"));
const ConcernMaster = lazy(() => import("../../../pages/view/master/concern/Concern-Master"));

// Import Trash Bin Components
const TrashBin = lazy(() => import("../../../pages/view/Trash/TrashBin"));
const PurchaseTrash = lazy(() => import("../../../pages/view/Trash/Purchase"));
const ProductTrash = lazy(() => import("../../../pages/view/Trash/Product"));
const ConcernTrash = lazy(() => import("../../../pages/view/Trash/Concern"));
const SaleTrash = lazy(() => import("../../../pages/view/Trash/Sale"));
const CustomerTrash = lazy(() => import("../../../pages/view/Trash/Customer"));
const PartyTrash = lazy(() => import("../../../pages/view/Trash/Party"));

export const Routedata = [
  { id: 2, path: `party`, element: <Party /> },
  { id: 3, path: `party/:id`, element: <UpdateParty /> },
  { id: 4, path: `party/add`, element: <AddParty /> },
  { id: 5, path: `quotation`, element: <Quotation /> },
  { id: 6, path: `quotation/add`, element: <AddQuotation /> },
  { id: 7, path: `quotation/update/:id`, element: <UpdateQuotation /> },
  { id: 8, path: `master/clothdec`, element: <ClothDec /> },
  { id: 9, path: `master/color`, element: <Color /> },
  { id: 10, path: `master/uom`, element: <Uom /> },
  { id: 11, path: `master/dia`, element: <Dia /> },
  { id: 12, path: `item`, element: <Item /> },
  { id: 13, path: `sale-entries`, element: <SaleEntry /> },
  { id: 14, path: `sale-entry`, element: <AddSaleEntry /> },
  { id: 15, path: `purchase-entries`, element: <PurchaseEntry /> },
  { id: 16, path: `purchase-entry`, element: <AddPurchaseEntry isnew /> },
  { id: 21, path: `purchase-entry/:id`, element: <AddPurchaseEntry /> },
  { id: 17, path: `customer`, element: <Customer /> },
  { id: 18, path: `financial`, element: <FinancialYears /> },
  { id: 20, path: `concern`, element: <ConcernMaster /> },
  { id: 1, path: `dashboard/sales`, element: <Sales /> },

  // Trash Bin Routes
  { id: 22, path: `trash-bin`, element: <TrashBin /> },
  { id: 23, path: `trash/purchase`, element: <PurchaseTrash /> },
  { id: 24, path: `trash/product`, element: <ProductTrash /> },
  { id: 25, path: `trash/concern`, element: <ConcernTrash /> },
  { id: 26, path: `trash/sale`, element: <SaleTrash /> },
  { id: 27, path: `trash/customer`, element: <CustomerTrash /> },
  { id: 28, path: `trash/party`, element: <PartyTrash /> },
];
