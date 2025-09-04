export const table1 =
    ` 
import { Table } from "react-bootstrap";

<div className="table-responsive">
<Table className="table text-nowrap">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Created On</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
<th scope="row">John</th>
<td>21,Dec 2023</td>
<td>+1234-12340</td>
<td><Badge className="bg-primary-transparent">
Completed</Badge></td>
        </tr>
        <tr>
<th scope="row">Vareni</th>
<td>29,April 2023</td>
<td>+1523-12459</td>
<td><Badge className="bg-secondary-transparent">
Failed</Badge></td>
        </tr>
        <tr>
<th scope="row">Sasra</th>
<td>30,Nov 2023</td>
<td>+1982-16234</td>
<td><Badge className="bg-success-transparent">
Successful</Badge></td>
        </tr>
        <tr>
<th scope="row">Widoyi</th>
<td>18,Mar 2023</td>
<td>+1526-10729</td>
<td><Badge className="bg-warning-transparent">
Pending</Badge></td>
        </tr>
        <tr>
<th scope="row">Rocky</th>
<td>30,Nov 2023</td>
<td>+1982-16234</td>
<td><Badge className="bg-success-transparent">
Successful</Badge></td>
        </tr>
    </tbody>
</Table>
</div>`;

export const reusabletable1 = ` 
<SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
{Basictable.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.date}</td>
        <td>{idx.number}</td>
        <td><SpkBadge Customclass={'bg-outline-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable2 = `

interface table1 {
    id: number
    src: string
    name: string
    mail: string
    color: string
    class: string
    class1: string
    text: string
}
export const Table1data: table1[] = [
    { id: 1, src: face13, name: "Sukuro Kim", mail: "kimosukuro@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" },
    { id: 2, src: face6, name: "Hasimna", mail: "hasimna2132@gmail.com", color: "light", class: "text-default", text: "Inactive", class1: "offline" },
    { id: 3, src: face15, name: "Azimo Khan", mail: "azimokhan421@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" },
    { id: 4, src: face5, name: "Samantha Julia", mail: "	julianasams143@gmail.com", color: "success-transparent ", class: "", text: "Active", class1: "online" }
];`

export const reusabletable2 = ` 
<SpkTablescomponent tableClass="text-nowrap table-bordered" header={[{ title: 'User' }, { title: 'Status' }, { title: 'Email' }, { title: 'Action' }]}>
{Table1data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </th>
        <td><SpkBadge variant={idx.color} Customclass={'&#60{idx.class}'}>{idx.text}</SpkBadge></td>
        <td>{idx.mail}</td>
        <td>
            <div className="hstack gap-2 flex-wrap">
                <Link href="#!" className="text-info fs-14 lh-1">
                    <i className="ri-edit-line"></i>
                </Link>
                <Link href="#!" className="text-danger fs-14 lh-1">
                    <i className="ri-delete-bin-5-line"></i>
                </Link>
            </div>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const table2 =
    `import {Table1data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

{Table1data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </th>
        <td><Badge bg={idx.color} className={'badge &#{idx.class}'}>{idx.text}</Badge></td>
        <td>{idx.mail}</td>
        <td>
            <div className="hstack gap-2 flex-wrap">
                <Link href="#!" className="text-info fs-14 lh-1">
                    <i className="ri-edit-line"></i>
                </Link>
                <Link href="#!" className="text-danger fs-14 lh-1">
                    <i className="ri-delete-bin-5-line"></i>
                </Link>
            </div>
        </td>
    </tr>
))}`;

export const datatable3 = `
interface table4 {
    id: number
    src: string
    order: string
    date: string
    name: string
}
export const Table4data: table4[] = [
    { id: 1, src: face3, order: "#0007", date: "26-04-2022", name: "Mayor Kelly", },
    { id: 2, src: face6, order: "#0008", date: "	15-02-2022", name: "Wicky Kross", },
    { id: 3, src: face1, order: "#0009", date: "23-05-2022", name: "Julia Cam", }
];`

export const table3 =
    `import {Table4data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table className="text-nowrap table-bordered border-primary">
<thead>
    <tr>
        <th scope="col">Order</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table4data.map((idx)=>(
    <tr>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="primary-transaprent">Booked</SpkBadge></td>
    </tr>
    ))}

</tbody>
</Table>`;

export const reusabletable3 = `
  <SpkTablescomponent tableClass="text-nowrap table-bordered border-primary" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Action' }]}>
{Table4data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="primary-transparent">Booked</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable4 = `

interface table4 {
    id: number
    src: string
    order: string
    date: string
    name: string
}

export const Table5data: table4[] = [
    { id: 1, src: face10, order: "#0011", date: "07-01-2022", name: "Helsenky", },
    { id: 2, src: face14, order: "#0012", date: "18-05-2022", name: "Brodus", },
    { id: 3, src: face12, order: "#0013", date: "19-03-2022", name: "Chikka Alen", }
];`
export const table4 =
    `import {Table5data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table className="text-nowrap table-bordered border-success">
<thead>
    <tr>
        <th scope="col">Order</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table5data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </span>{idx.name}
            </div>
        </td>
        <td><span className="badge bg-success-transparent">Delivered</span></td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable4 = `
 <SpkTablescomponent tableClass="text-nowrap table-bordered border-success" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Table5data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass=" text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="success-transparent">Delivered</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable5 = `
export const Table6data: table4[] = [
    { id: 1, src: face13, order: "#0014", date: "21-02-2022", name: "Sukuro Kim", },
    { id: 2, src: face11, order: "#0018", date: "26-03-2022", name: "Alex Carey", },
    { id: 3, src: face2, order: "#0020", date: "14-03-2022", name: "Pamila Anderson", }
];`
export const table5 =
    `import {Table6data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";


<tbody>
{Table6data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><span className="badge bg-warning-transparent">Accepted</span></td>
    </tr>
))}
</tbody>`;

export const reusabletable5 = ` 
<SpkTablescomponent tableClass="text-nowrap table-bordered border-warning" header={[{ title: 'Order' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Table6data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <SpkBadge variant="light" Customclass="text-dark">{idx.date}</SpkBadge>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td><SpkBadge variant="warning-transparent">Accepted</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const table6 =
    `<Table className="table text-nowrap table-borderless">
<thead>
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">Harshrath</th>
        <td>#5182-3467</td>
        <td>24 May 2022</td>
        <td><span className="badge bg-primary">Fixed</span></td>
    </tr>
    <tr>
        <th scope="row">Zozo Hadid</th>
        <td>#5182-3412</td>
        <td>02 July 2022</td>
        <td><span className="badge bg-warning">In Progress</span></td>
    </tr>
    <tr>
        <th scope="row">Martiana</th>
        <td>#5182-3423</td>
        <td>15 April 2022</td>
        <td><span className="badge bg-success">Completed</span></td>
    </tr>
    <tr>
        <th scope="row">Alex Carey</th>
        <td>#5182-3456</td>
        <td>17 March 2022</td>
        <td><span className="badge bg-danger">Pending</span></td>
    </tr>
</tbody>
</Table>`;

export const reusabletable6 = ` 
 <SpkTablescomponent tableClass="text-nowrap table-borderless" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Borderdata.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.transactionid}</td>
        <td>{idx.date}</td>
        <td><SpkBadge variant="" Customclass={'bg-&#60{idx.color}'}>{idx.status}</SpkBadge></td>
    </tr>
))}
</SpkTablescomponent>`

export const table7 =
    `<Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Product</th>
        <th scope="col">Seller</th>
        <th scope="col">Sale Percentage</th>
        <th scope="col">Qunatity Sold</th>
    </tr>
</thead>
<tbody className="table-group-divider">
    <tr>
        <th scope="row">Smart Watch</th>
        <td>Slowtrack.inc</td>
        <td><a href="#!" scroll={false} className="text-success">24.23%<i
                    className="ri-arrow-up-fill ms-1"></i></a></td>
        <td>250/1786</td>
    </tr>
    <tr>
        <th scope="row">White Sneakers</th>
        <td>American & Co.inc</td>
        <td><a href="#!" scroll={false} className="text-danger">12.45%<i
                    className="ri-arrow-down-fill ms-1"></i></a></td>
        <td>123/985</td>
    </tr>
    <tr>
        <th scope="row">Baseball Bat</th>
        <td>Sports Company</td>
        <td><a href="#!" scroll={false} className="text-success">06.64%<i
                    className="ri-arrow-up-fill ms-1"></i></a></td>
        <td>124/232</td>
    </tr>
    <tr>
        <th scope="row">Black Hoodie</th>
        <td>Renonds Fabrics</td>
        <td><a href="#!" scroll={false} className="text-success">14.42%<i
                    className="ri-arrow-up-fill ms-1"></i></a></td>
        <td>192/2456</td>
    </tr>
</tbody>
</Table>`;

export const reusabletable7 = `
 <SpkTablescomponent tableClass="text-nowrap" tBodyClass="table-group-divider" header={[{ title: 'Product' }, { title: 'Seller' }, { title: 'Sale Percentage' }, { title: 'Quantity Sold' }]}>
{Groupdata.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.product}</th>
        <td>{idx.seller}</td>
        <td><Link href="#!" scroll={false} className={'text-&#60{idx.color}'}>{idx.percent}<i
            className={'ri-arrow-&#60{idx.icon}-fill ms-1'}></i></Link></td>
        <td>{idx.sold}</td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable8 = `
interface table2 {
    id: number
    order: string
    name: string
    date: string
}
export const Table2data: table2[] = [
    { id: 1, order: "2022R-01", date: "27-010-2022", name: "Moracco" },
    { id: 2, order: "2022R-02", date: "28-10-2022", name: "Thornton" },
    { id: 3, order: "2022R-03", date: "22-10-2022", name: "Larry Bird" },
    { id: 4, order: "2022R-04", date: "29-09-2022", name: "Erica Sean" }
];`;

export const table8 =
    `
import {Table2data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table striped className="table text-nowrap table-striped">
<thead>
    <tr>
     <th scope="col">ID</th>
     <th scope="col">Date</th>
     <th scope="col">Customer</th>
     <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table2data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
        <div className="hstack gap-2 fs-15">
        <a href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-edit-line"></i></a>
       <a href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></a>
   </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable8 = `
 <SpkTablescomponent tableClass="text-nowrap table-striped" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Table2data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <SpkButton Buttonvariant="success" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download </SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const table9 =
    `import {Tab2e1data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-striped-columns">
<thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table2data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <div className="hstack gap-2 fs-15">
                 <a href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light 
                 rounded-pill"><i className="ri-edit-line"></i></a>
                <a href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-light
                 rounded-pill"><i className="ri-delete-bin-line"></i></a>
            </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable9 = ` 
<SpkTablescomponent tableClass="text-nowrap table-striped-columns" header={[{ title: 'ID' }, { title: 'Date' }, { title: 'Customer' }, { title: 'Status' }]}>
{Table2data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <SpkButton Buttonvariant="danger" Size="sm" Customclass="waves-effect waves-light"> <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete </SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable10 = `
export const Table3data: table3[] = [
    { id: 1, text1: "Mark", text2: "Otto", text3: "@mdo" },
    { id: 2, text1: "Jacob", text2: "Thornton", text3: "@fat" },
    { id: 3, text1: "Larry the Bird", text2: "Thornton", text3: "@twitter" }
];`
export const table10 =
    `
import {Table3data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable10 = `
 <SpkTablescomponent tableClass="text-nowrap table-primary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{Table3data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table11 =
    `import {Table3data} from "@/shared/data/tables/tablesdata";  
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable11 = ` 
 <SpkTablescomponent tableClass="text-nowrap table-secondary" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{Table3data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table12 =
    `
import {Table3data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable12 = ` 
<SpkTablescomponent tableClass="text-nowrap table-warning" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{Table3data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table13 =
    ` 
import {Table3data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable13 = ` 
<SpkTablescomponent tableClass="text-nowrap table-danger" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{Table3data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table14 =
    `<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable14 = `  
 <SpkTablescomponent tableClass="text-nowrap table-dark" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{Table3data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table15 =
    `import {Table3data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-primary overflow-hidden rounded-3">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">1</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable15 = `
 <SpkTablescomponent tableClass="text-nowrap table-success table-striped" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
{Table3data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table16 =
    `<Table className="table text-nowrap table-hover">
<thead>
    <tr>
        <th scope="col">Product Manager</th>
        <th scope="col">Category</th>
        <th scope="col">Team</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={face10} alt="img"/>
                </div>
                <div>
                    <div className="lh-1">
                        <span>Joanna Smith</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">joannasmith14@gmail.com</span>
                    </div>
                </div>
            </div>
        </td>
        <td><SpkBadge variant="primary-transaprent">Fashion</SpkBadge></td>
        <td>
            <div className="avatar-list-stacked">
                <span className="avatar avatar-sm avatar-rounded">
                    <img src="{face2} alt="img"/>
                </span>
                <span className="avatar avatar-sm avatar-rounded">
                    <img src={face8} alt="img"/>
                </span>
                <span className="avatar avatar-sm avatar-rounded">
                    <img src="{face2} alt="img"/>
                </span>
                <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                    href="#!" scroll={false}>
                    +5
                </a>
            </div>
        </td>
        <td>
            <div className="progress progress-xs">
                <div className="progress-bar bg-primary" role="progressbar"
                    style={{width: "52%"}} aria-valuenow="52" aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
        </td>
    </tr>  
</tbody>
</Table>`;

export const reusabletable16 = ` 
  <SpkTablescomponent tableClass="text-nowrap table-hover" header={[{ title: 'Product Manager' }, { title: 'Category' }, { title: 'Team' }, { title: 'Status' }]}>
{Hoverabledata.map((idx) => (
    <tr key={Math.random()}>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.product}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><span className={'badge bg-&#60{idx.color}-transparent'}>{idx.category}</span></td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress variant='primary' mainClass='progress-xs' now={idx.status} />
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable17 = `
interface table11 {
    id: number
    src: string
    name: string
    mail: string
    date: string
    text1: string
    text2: string
    color: string
    class: string
    icon: string
}
export const Table13data: table11[] = [
    { id: 1, src: face15, name: "Mark Cruise", mail: "markcruise24@gmail.com", date: "Jul 26,2022", text1: "IN-2032", text2: "Paid", color: "success-transparent", class: "", icon: "check-fill" },
    { id: 2, src: face12, name: "Charanjeep", mail: "charanjeep@gmail.in", date: "Mar 14,2022", text1: "IN-2022", text2: "Paid", color: "success-transparent", class: "", icon: "check-fill" },
    { id: 3, src: face5, name: "Samantha Julie", mail: "julie453@gmail.com", date: "Feb 1,2022", text1: "IN-2014", text2: "Cancelled", color: "danger-transparent", class: "", icon: "close-fill" },
    { id: 4, src: face11, name: "Simon Cohen", mail: "simon@gmail.com", date: "Apr 24,2022", text1: "IN-2036", text2: "	Refunded", color: "light", class: "text-default", icon: "reply-line" }
];`
export const table17 =
    `import {Table13data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="text-nowrap table-striped table-hover">
<thead>
    <tr>
        <th scope="col">Invoice</th>
        <th scope="col">Customer</th>
        <th scope="col">Status</th>
        <th scope="col">Date</th>
    </tr>
</thead>
<tbody>
    {Table13data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.text1}</th>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.name}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><Badge bg={idx.color} className={badge {idx.class}}><i
                    className={ri-{idx.icon} align-middle me-1}>
                    </i>{idx.text2}</Badge></td>
        <td>{idx.date}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable17 = `
<SpkTablescomponent tableClass="text-nowrap table-striped table-hover" header={[{ title: 'Invoice' }, { title: 'Customer' }, { title: 'Status' }, { title: 'Date' }]}>
{Table13data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.text1}</th>
        <td>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-sm me-2 avatar-rounded">
                    <img src={idx.src} alt="img" />
                </div>
                <div>
                    <div className="lh-1">
                        <span>{idx.name}</span>
                    </div>
                    <div className="lh-1">
                        <span
                            className="fs-11 text-muted">{idx.mail}</span>
                    </div>
                </div>
            </div>
        </td>
        <td><SpkBadge variant={idx.color} Customclass={idx.class}><i
            className={'ri-&#60{idx.icon} align-middle me-1'}></i>{idx.text2}</SpkBadge></td>
        <td>{idx.date}</td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable18 = `
interface table5 {
    id: number
    text: string
    date: string
    name: string
}
export const Table7data: table5[] = [
    { id: 1, name: "Harshrath", date: "24 May 2022", text: "	#5182-3467" },
    { id: 2, name: "Zozo Hadid", date: "02 July 2022", text: "#5182-3412" },
    { id: 3, name: "Martiana", date: "15 April 2022", text: "#5182-3423" },
    { id: 4, name: "Alex Carey", date: "17 March 2022", text: "#5182-3456" }
];`
export const table18 =
    `import {Table7data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-primary">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table7data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
<div className="hstack gap-2 fs-15">
    <a href="#!" scroll={false}
        className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
className="ri-download-2-line"></i></a>
    <a href="#!" scroll={false}
        className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
className="ri-edit-line"></i></a>
    <a href="#!" scroll={false}
        className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
className="ri-delete-bin-line"></i></a>
</div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable18 = ` 
  <SpkTablescomponent headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Table7data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link href="#!" scroll={false}
                    className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
                        className="ri-download-2-line"></i></Link>
                <Link href="#!" scroll={false}
                    className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
                        className="ri-edit-line"></i></Link>
                <Link href="#!" scroll={false}
                    className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
                        className="ri-delete-bin-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable19 = `
interface table6 {
    id: number
    text: string
    date: string
    name: string
    btn: string
    color: string
}
export const Table8data: table6[] = [
    { id: 1, name: "Harshrath", date: "24 May 2022", text: "	#5182-3467", btn: "Pending", color: "primary-light" },
    { id: 2, name: "Zozo Hadid", date: "02 July 2022", text: "#5182-3412", btn: "Pending", color: "primary-light" },
    { id: 3, name: "Martiana", date: "15 April 2022", text: "#5182-3423", btn: "Rejected", color: "danger-light" },
    { id: 4, name: "Alex Carey", date: "17 March 2022", text: "#5182-3456", btn: "Processed", color: "success-light" }
];`;
export const table19 =
    `import {Table8data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-warning">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table8data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <Button variant={idx.color} className="btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable19 = `
 <SpkTablescomponent tableClass="text-nowrap" headerClass="table-warning" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Table8data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const table20 =
    `import {Table8data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-success">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table8data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <Button variant={idx.color} className="btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable20 = ` 
 <SpkTablescomponent tableClass="text-nowrap" headerClass="table-success" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Table8data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const table21 =
    `import {Table8data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-info">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table8data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <Button variant={idx.color} className="btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable21 = `
 <SpkTablescomponent tableClass="text-nowrap" headerClass="table-info" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Table8data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const table22 =
    `import {Table8data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-secondary">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table8data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <Button variant={idx.color} className="btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable22 = ` 
 <SpkTablescomponent tableClass="text-nowrap" headerClass="table-secondary" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Table8data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const table23 =
    ` import {Table8data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-danger">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table8data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.color}</td>
        <td>
            <Button variant={idx.color} className="btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable23 = `
 <SpkTablescomponent tableClass="text-nowrap" headerClass="table-danger" header={[{ title: 'User Name' }, { title: 'Transaction Id' }, { title: 'Created' }, { title: 'Status' }]}>
{Table8data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
            <SpkButton Buttonvariant={idx.color} Size="sm">{idx.btn}</SpkButton>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable24 = `
interface table8 {
    id: number
    text1: string
    text2: string
    text3: string
    text4: string
}
export const Table10data: table8[] = [
    { id: 1, text1: "01", text2: "Manchester", text3: "232", text4: "42%" },
    { id: 2, text1: "02", text2: "Barcelona", text3: "175", text4: "58%" },
    { id: 3, text1: "03", text2: "Portugal", text3: "126", text4: "32%" }
];`
export const table24 =
    ` import {Table10data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead className="table-primary">
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Team</th>
        <th scope="col">Matches Won</th>
        <th scope="col">Win Ratio</th>
    </tr>
</thead>
<tbody>
    {Table10data.map((idx) => (
        <tr key={Math.random()}>
            <th scope="row">
                {idx.text1}
            </th>
            <td>
                {idx.text2}
            </td>
            <td>
                {idx.text3}
            </td>
            <td>
                <span className="badge bg-primary">{idx.text3}</span>
            </td>
        </tr>
    ))}
</tbody>
<tfoot className="table-primary">
    <tr>
        <th scope="row">
            Total
        </th>
        <td>
            United States
        </td>
        <td>
            558
        </td>
        <td><span className="badge bg-primary">56%</span></td>
    </tr>
</tfoot>
</Table>`;

export const reusabletable24 = ` 
 <SpkTablescomponent footerClass="table-primary" headerClass="table-primary" tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Team' }, { title: 'Matches Won' }, { title: 'Win Ratio' }]}>
{Table10data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            {idx.text1}
        </th>
        <td>
            {idx.text2}
        </td>
        <td>
            {idx.text3}
        </td>
        <td>
            <SpkBadge variant="primary">{idx.text3}</SpkBadge>
        </td>
    </tr>
))}
<tr className="table-primary">
    <th scope="row">
        Total
    </th>
    <td>
        United States
    </td>
    <td>
        558
    </td>
    <td><SpkBadge variant="primary">56%</SpkBadge></td>
</tr>
</SpkTablescomponent>`

export const table25 =
    `<Table className="table text-nowrap">
<caption className="px-3">Top 3 Countries</caption>
<thead>
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Country</th>
        <th scope="col">Medals Won</th>
        <th scope="col">No Of Athletes</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">01</th>
        <td>United States</td>
        <td>2012<i className="ri-medal-line mx-2"></i></td>
        <td>1823</td>
    </tr>
    <tr>
        <th scope="row">02</th>
        <td>United Kingdom</td>
        <td>1012<i className="ri-medal-line mx-2"></i></td>
        <td>992</td>
    </tr>
    <tr>
        <th scope="row">03</th>
        <td>Germany</td>
        <td>914<i className="ri-medal-line mx-2"></i></td>
        <td>875</td>
    </tr>
</tbody>
</Table>`;

export const reusabletable25 = `  
 <SpkTablescomponent headerContent={<caption className='px-3'>Top 3 Countries</caption>} tableClass="text-nowrap" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Medals Won' }, { title: 'No Of Athletes' }]}>
{Captiondata.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">0{idx.id}</th>
        <td>{idx.country}</td>
        <td>{idx.won}<i className="ri-medal-line mx-2"></i></td>
        <td>{idx.athletes}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table26 =
    `<Table className="table text-nowrap caption-top">
<caption className="px-2">Top IT Companies</caption>
<thead>
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Revenue</th>
        <th scope="col">Country</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Microsoft</td>
        <td>$170 billion</td>
        <td>United States</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>HP</td>
        <td>$72 billion</td>
        <td>United States</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>IBM</td>
        <td>$60 billion</td>
        <td>United States</td>
    </tr>
</tbody>
</Table>`;

export const reusabletable26 = `
  <SpkTablescomponent headerContent={<caption className="px-2">Top IT Companies</caption>} tableClass="text-nowrap caption-top" header={[{ title: 'S.No' }, { title: 'Country' }, { title: 'Revenue' }, { title: 'Country' }]}>
{Topcaptuiondata.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.name}</td>
        <td>{idx.revenue}</td>
        <td>{idx.country}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table27 =
    ` <Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Created On</th>
        <th scope="col">Number</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    <tr className="table-active">
        <th scope="row">Mark</th>
        <td>21,Dec 2021</td>
        <td>+1234-12340</td>
        <td><span className="badge bg-primary">Completed</span></td>
    </tr>
    <tr>
        <th scope="row">Monika</th>
        <td>29,April 2022</td>
        <td>+1523-12459</td>
        <td><span className="badge bg-warning">Failed</span></td>
    </tr>
    <tr>
        <th scope="row">Madina</th>
        <td>30,Nov 2022</td>
        <td className="table-active">+1982-16234</td>
        <td><span className="badge bg-success">Successful</span></td>
    </tr>
    <tr>
        <th scope="row">Bhamako</th>
        <td>18,Mar 2022</td>
        <td>+1526-10729</td>
        <td><span className="badge bg-secondary">Pending</span></td>
    </tr>
</tbody>
 </Table>`;

 export const reusabletable27 = `
 <SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Name' }, { title: 'Created On' }, { title: 'Number' }, { title: 'Status' }]}>
 {Activedata.map((idx) => (
     <tr key={Math.random()} className={idx.class}>
         <th scope="row">{idx.name}</th>
         <td>{idx.create}</td>
         <td className={idx.tdclass}>{idx.number}</td>
         <td><span className={'badge bg-&#60{idx.color}'}>{idx.status}</span></td>
     </tr>
 ))}
</SpkTablescomponent>`

export const datatable28 = `
interface table7 {
    id: string
    text: string
    date: string
    name: string
    class: string
}
export const Table9data: table7[] = [
    { id: "1", name: "Zelensky", date: "25-Apr-2021", text: "Paid", class: "success-transparent" },
    { id: "2", name: "Kim Jong", date: "29-April-2022", text: "Pending", class: "danger-transparent" },
    { id: "3", name: "Obana", date: "30-Nov-2022", text: "Paid", class: "success-transparent" },
    { id: "4", name: "Sean Paul", date: "01-Jan-2022", text: "Paid", class: "success-transparent" },
    { id: "5", name: "Karizma", date: "14-Feb-2022", text: "Pending", class: "danger-transparent" }
];`
export const table28 =
    `import {Table9data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap table-sm">
<thead>
    <tr>
        <th scope="col">Invoice</th>
        <th scope="col">Created Date</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table9data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">
            <div className="form-check">
            <Form.Check id={idx.id} className="" type="checkbox" value="" />
                <Form.Label className="" htmlFor="checkebox-sm">
                    {idx.name}
                </Form.Label>
            </div>
        </th>  
        <td>{idx.date}</td>
        <td><Badge bg={idx.class} className="badge 
        bg-success-transparent">{idx.text}</Badge></td>
        <td>
            <div className="hstack gap-2 fs-15">
                <a href="#!" scroll={false} className="btn btn-icon btn-sm
                 btn-light"><i className="ri-download-2-line"></i></a>
                <a href="#!" scroll={false} className="btn btn-icon btn-sm 
                btn-light"><i className="ri-edit-line"></i></a>
            </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable28 = ` 
<SpkTablescomponent tableClass="text-nowrap table-sm" header={[{ title: 'Invoice' }, { title: 'Created Date' }, { title: 'Status' }, { title: 'Action' }]}>
{Table9data.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row">
            <div className="form-check">
                <input id={idx.id} defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" value="" />
                <div className="form-check-label">
                    {idx.name}
                </div>
            </div>
        </th>
        <td>{idx.date}</td>
        <td><SpkBadge variant={idx.class} Customclass="bg-success-transparent">{idx.text}</SpkBadge></td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable29 = `
interface table9 {
    id: number
    text: string
    color: string
    quantity: string
    price: string
    class1: string
    class2: string
    name: string
    bgcolor: string
}
export const Table11data: table9[] = [
    { id: 1, text: "Default", color: "primary-transparent", quantity: "22", price: "$2,012", class1: "", class2: "", name: "Rita Book", bgcolor: "" },
    { id: 2, text: "Primary", color: "primary", quantity: "22", price: "$4,254", class1: "table-primary", class2: "", name: "Rhoda Report", bgcolor: "table-primary" },
    { id: 3, text: "Secondary", color: "secondary", quantity: "26", price: "$1,234", class1: "table-secondary", class2: "", name: "Rita Book", bgcolor: "table-secondary" },
    { id: 4, text: "Success", color: "success", quantity: "42", price: "$2,623", class1: "table-success", class2: "", name: "Anne Teak", bgcolor: "table-success" },
    { id: 5, text: "Danger", color: "danger", quantity: "52", price: "$32,132", class1: "table-danger", class2: "", name: "Dee End", bgcolor: "table-danger" },
    { id: 6, text: "Warning", color: "warning", quantity: "10", price: "$1,434", class1: "table-warning", class2: "", name: "Lee Nonmi", bgcolor: "table-warning" },
    { id: 7, text: "Info", color: "info", quantity: "63", price: "$1,854", class1: "table-info", class2: "", name: "Lynne Gwistic", bgcolor: "table-info" },
    { id: 8, text: "Light", color: "light", quantity: "05", price: "$823", class1: "table-light", class2: "text-default", name: "Fran Tick", bgcolor: "table-light" },
    { id: 9, text: "Dark", color: "dark", quantity: "35", price: "$1,832", class1: "table-dark", class2: "text-light", name: "Polly Pipe", bgcolor: "table-dark" }
];`
export const table29 =
    `import {Table11data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Color</th>
        <th scope="col">Client</th>
        <th scope="col">State</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total Price</th>
    </tr>
</thead>
<tbody>
    {Table11data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.text}</th>
        <td>{idx.name}</td>
        <td><Badge bg={idx.color} 
        className={badge {idx.class2}}>Processed</Badge></td>
        <td>{idx.quantity}</td>
        <td>{idx.price}</td>
    </tr>
    ))}
</tbody>
</Table>`;

export const reusabletable29 = ` 
<SpkTablescomponent tableClass="text-nowrap" header={[{ title: 'Color' }, { title: 'Client' }, { title: 'State' }, { title: 'Quantity' }, { title: 'Total Price' }]}>
{Table11data.map((idx) => (
    <tr key={Math.random()} className={idx.bgcolor}>
        <th scope="row">{idx.text}</th>
        <td>{idx.name}</td>
        <td><SpkBadge variant={idx.color} Customclass={idx.class2}>Processed</SpkBadge></td>
        <td>{idx.quantity}</td>
        <td>{idx.price}</td>
    </tr>
))}
</SpkTablescomponent>`

export const table30 =
    `<Table className="table text-nowrap table-striped table-bordered">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <td colSpan="4">
            <table className="table text-nowrap mb-0">
                <thead>
                    <tr>
                        <th scope="col">Aplhabets</th>
                        <th scope="col">Users</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">A</th>
                        <td>Dino King</td>
                        <td>dinoking231@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td>Poppins sams</td>
                        <td>pops@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">C</th>
                        <td>Brian Shaw</td>
                        <td>swanbrian@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
    <tr>
        <th scope="row">4</th>
        <td>Jimmy</td>
        <td>the Ostrich</td>
        <td>Dummy Text</td>
    </tr>
    <tr>
        <th scope="row">5</th>
        <td>Cobra Kai</td>
        <td>the Snake</td>
        <td>Another Name</td>
    </tr>
</tbody>
</Table>`;

export const reusabletable30 = `  
 <SpkTablescomponent tableClass="text-nowrap table-striped table-bordered" header={[{ title: '#' }, { title: 'First' }, { title: 'Last' }, { title: 'Handle' }]}>
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
<tr>
    <td colSpan={4}>
        <table className="table text-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col">Alphabets</th>
                    <th scope="col">Users</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">A</th>
                    <td>Dino King</td>
                    <td>dinoking231@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">B</th>
                    <td>Poppins sams</td>
                    <td>pops@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row">C</th>
                    <td>Brian Shaw</td>
                    <td>swanbrian@gmail.com</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
</tr>
<tr>
    <th scope="row">4</th>
    <td>Jimmy</td>
    <td>the Ostrich</td>
    <td>Dummy Text</td>
</tr>
<tr>
    <th scope="row">5</th>
    <td>Cobra Kai</td>
    <td>the Snake</td>
    <td>Another Name</td>
</tr>
</SpkTablescomponent>`

export const table31 =
    ` <Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col"><input className="form-check-input" 
        type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/></th>
        <th scope="col">Team Head</th>
        <th scope="col">Gmail</th>
        <th scope="col">Category</th>
        <th scope="col">Role</th>
        <th scope="col">Team</th>
        <th scope="col">Work Progress</th>
        <th scope="col">Revenue</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row"><input className="form-check-input" type="checkbox" 
        id="checkboxNoLabel1" value="" aria-label="..."/></th>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={face3}alt="img"/>
                </span>Mayor Kelly
            </div>
        </td>
        <td>mayorkrlly@gmail.com</td>
        <td>Manufacturer</td>
        <td><SpkBadge variant="primary-transaprent">Team Lead</SpkBadge></td>
        <td>
        <ProgressBar className="progress progress-xs" variant='primary' now={52} />
        </td>
        <td>$10,984.29</td>
        <td>
            <div className="avatar-list-stacked">
                <span className="avatar avatar-sm avatar-rounded">
                    <img src="{face2} alt="img"/>
                </span>
                <span className="avatar avatar-sm avatar-rounded">
                    <img src={face8} alt="img"/>
                </span>
                <span className="avatar avatar-sm avatar-rounded">
                    <img src="{face2} alt="img"/>
                </span>
                <a className="avatar avatar-sm bg-primary 
                text-fixed-white avatar-rounded" href="#!" scroll={false}>
                    +4
                </a>
            </div>
        </td>
        <td>
            <div className="hstack gap-2 fs-15">
                <a href="#!" scroll={false} className="btn btn-icon btn-sm btn-success">
                <i className="ri-download-2-line"></i></a>
                <a href="#!" scroll={false} className="btn btn-icon btn-sm btn-info">
                <i className="ri-edit-line"></i></a>
            </div>
        </td>
    </tr>
</tbody>
</Table>`;

export const reusabletable31 = `
 <SpkTablescomponent tableClass="text-nowrap" showCheckbox={true} header={[{ title: 'Team Head' }, { title: 'Category' }, { title: 'Role' }, { title: 'Gmail' }, { title: 'Team' }, { title: 'Work Progress' }, { title: 'Revenue' }, { title: 'Action' }]}>
{Responsivedata.map((idx) => (
    <tr key={Math.random()}>
        <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img" />
                </span>{idx.name}
            </div>
        </td>
        <td>{idx.category}</td>
        <td><SpkBadge variant="primary-transparent">{idx.role}</SpkBadge></td>
        <td>{idx.mail}</td>
        <td>
            {idx.team}
        </td>
        <td>
            <SpkProgress mainClass="progress progress-xs" variant='primary' now={idx.progress} />
        </td>
        <td>{idx.revenue}</td>

        <td>
            <div className="hstack gap-2 fs-15">
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
))}
</SpkTablescomponent>`

export const datatable32 = `
interface table10 {
    id: number
    text1: string
    text2: string
    text3: string
    text4: string
    class1: string
    class2: string
    code1: string
    code2: string
}

export const Table12data: table10[] = [
    { id: 1, text1: "This cell inherits", text2: " from the table", text3: "This cell inherits ", text4: "from the table", class1: "", class2: "", code1: "vertical-align: middle;", code2: "vertical-align: middle;" },
    { id: 2, text1: "This cell inherits", text2: "from the table row", text3: "This cell inherits ", text4: "from the table row", class1: "align-bottom", class2: "", code1: "vertical-align: bottom;", code2: "vertical-align: bottom;" },
    { id: 3, text1: "This cell inherits", text2: " from the table", text3: "This cell is aligned to the top.", text4: "", class1: "", class2: "align-top", code1: "vertical-align: middle;", code2: "" },

];`
export const table32 =
    `import {Table12data} from "@/shared/data/tables/tablesdata"; 
import { Table } from "react-bootstrap";

<Table className="table align-middle">
<thead>
    <tr>
        <th scope="col" className="w-25">Heading 1</th>
        <th scope="col" className="w-25">Heading 2</th>
        <th scope="col" className="w-25">Heading 3</th>
        <th scope="col" className="w-25">Heading 4</th>
    </tr>
</thead>
<tbody>
{Table12data.map((idx) => (
    <tr key={Math.random()} className={idx.class1}>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
        <td>This here is some placeholder text, intended to take up
            quite a
            bit of vertical space, to demonstrate how the vertical
            alignment
            works in the preceding cells.</td>
    </tr>
))}
</tbody>
</Table>`;

export const reusabletable32 = `
 <SpkTablescomponent tableClass="align-middle" header={[{ title: 'Heading 1' }, { title: 'Heading 2' }, { title: 'Heading 3' }, { title: 'Heading 4' }]}>
{Table12data.map((idx) => (
    <tr key={Math.random()} className={idx.class1}>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
        <td>This here is some placeholder text, intended to take up
            quite a
            bit of vertical space, to demonstrate how the vertical
            alignment
            works in the preceding cells.</td>
    </tr>
))}
</SpkTablescomponent>`

