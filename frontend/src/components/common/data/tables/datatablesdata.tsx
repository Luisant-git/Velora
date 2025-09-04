import { Fragment, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import SpkButton from "../../../../@spk-reusable-components/reusable-uielements/spk-button";

//BASIC TABLE

export const COLUMNS: any = [
	{
		Header: "Name",
		accessor: "Name",
	},
	{
		Header: "Position",
		accessor: "Position",
	},
	{
		Header: "Office",
		accessor: "Office",
	},
	{
		Header: "Age",
		accessor: "Age",
	},
	{
		Header: "Start date",
		accessor: "date",
	},
	{
		Header: "Salary",
		accessor: "Salary",
	},
];

export const DATATABLE = [
	{
		Id: "1",
		Name: "Tiger Nixon",
		Position: "System Architect",
		Office: "Edinburgh",
		Age: "61",
		date: "2011-04-25",
		Salary: "$320,800",
	},
	{
		Id: "2",
		Name: "Garrett Winters",
		Position: "Accountant",
		Office: "Tokyo",
		Age: "63",
		date: "2011-07-25",
		Salary: "$170,750",
	},
	{
		Id: "3",
		Name: "Ashton Cox",
		Position: "Junior Technical Author",
		Office: "San Francisco",
		Age: "66",
		date: "2009-01-12",
		Salary: "$86,000",
	},
	{
		Id: "4",
		Name: "Cedric Kelly",
		Position: "Senior Javascript Developer",
		Office: "Edinburgh",
		Age: "22",
		date: "2012-03-29",
		Salary: "$433,060",
	},
	{
		Id: "5",
		Name: "Airi Satou",
		Position: "Accountant",
		Office: "Tokyo",
		Age: "33",
		date: "2010-10-14",
		Salary: "$162,700",
	},
	{
		Id: "6",
		Name: "Brielle Williamson",
		Position: "Integration Specialist",
		Office: "New York",
		Age: "61",
		date: "2009-09-15",
		Salary: "$372,000",
	},
	{
		Id: "7",
		Name: "Herrod Chandler",
		Position: "Sales Assistant",
		Office: "San Francisco",
		Age: "59",
		date: "2008-12-13",

		Salary: "$137,500",
	},
	{
		Id: "8",
		Name: "Rhona Davidson",
		Position: "Integration Specialist",
		Office: "Tokyo",
		Age: "55",
		date: "2008-12-19",
		Salary: "$327,900",
	},
	{
		Id: "9",
		Name: "Colleen Hurst",
		Position: "Javascript Developer",
		Office: "San Francisco",
		Age: "39",
		date: "2013-03-03",
		Salary: "$205,500",
	},
	{
		Id: "10",
		Name: "Sonya Frost",
		Position: "Software Engineer",
		Office: "Edinburgh",
		Age: "23",
		date: "2013-03-03",
		Salary: "$103,600",
	},
	{
		Id: "11",
		Name: "Jena Gaines",
		Position: "Office Manager",
		Office: "London",
		Age: "30",
		date: "2008-10-16",
		Salary: "$90,560",
	},
	{
		Id: "12",
		Name: "Quinn Flynn",
		Position: "Support Lead",
		Office: "Edinburgh",
		Age: "22",
		date: "2012-12-18",
		Salary: "$342,000",
	},
	{
		Id: "13",
		Name: "Charde Marshall",
		Position: "Regional Director",
		Office: "San Francisco",
		Age: "36",
		date: "2010-06-09",
		Salary: "$470,600",
	},
	{
		Id: "14",
		Name: "Haley Kennedy",
		Position: "Senior Marketing Designer",
		Office: "London",
		Age: "43",
		date: "2009-04-10",
		Salary: "$313,500",
	},
	{
		Id: "15",
		Name: "Tatyana Fitzpatrick",
		Position: "Regional Director",
		Office: "London",
		Age: "19",
		date: "2012-10-13",
		Salary: "$385,750",
	},
	{
		Id: "16",
		Name: "Michael Silva",
		Position: "Marketing Designer",
		Office: "London",
		Age: "66",
		date: "2012-09-26",
		Salary: "$198,500",
	},
	{
		Id: "17",
		Name: "Paul Byrd",
		Position: "Chief Financial Officer (CFO)",
		Office: "New York",
		Age: "64",
		date: "2011-09-03",
		Salary: "$725,000",
	},
	{
		Id: "18",
		Name: "Gloria Little",
		Position: "Systems Administrator",
		Office: "New York",
		Age: "59",
		date: "2009-06-25",
		Salary: "$237,500",
	},
	{
		Id: "19",
		Name: "Bradley Greer",
		Position: "Software Engineer",
		Office: "London",
		Age: "41",
		date: "2011-12-12",
		Salary: "$132,000",
	},
	{
		Id: "20",
		Name: "Dai Rios",
		Position: "Personnel Lead",
		Office: "Edinburgh",
		Age: "35",
		date: "2010-09-20",
		Salary: "$217,500",
	},
	{
		Id: "21",
		Name: "Jenette Caldwell",
		Position: "Development Lead",
		Office: "New York",
		Age: "30",
		date: "2009-10-09",
		Salary: "$345,000",
	},
	{
		Id: "22",
		Name: "Yuri Berry",
		Position: "Chief Marketing Officer (CMO)",
		Office: "New York",
		Age: "40",
		date: "2010-12-22",
		Salary: "$675,000",
	},
	{
		Id: "23",
		Name: "Caesar Vance",
		Position: "Pre-Sales Support",
		Office: "New York",
		Age: "21",
		date: "2010-11-14",
		Salary: "$106,450",
	},
	{
		Id: "24",
		Name: "Doris Wilder",
		Position: "Sales Assistant",
		Office: "Sidney",
		Age: "23",
		date: "2011-06-07",
		Salary: "$85,600",
	},
	{
		Id: "25",
		Name: "Angelica Ramos",
		Position: "Chief Executive Officer (CEO)",
		Office: "London",
		Age: "47",
		date: "2010-03-11",
		Salary: "$1,200,000",
	},
	{
		Id: "26",
		Name: "Gavin Joyce",
		Position: "Developer",
		Office: "Edinburgh",
		Age: "42",
		date: "2011-08-14",
		Salary: "$92,575",
	},
	{
		Id: "27",
		Name: "Jennifer Chang",
		Position: "Regional Director",
		Office: "Singapore",
		Age: "28",
		date: "2011-05-07",
		Salary: "$357,650",
	},
	{
		Id: "28",
		Name: "Brenden Wagner",
		Position: "Software Engineer",
		Office: "San Francisco",
		Age: "28",
		date: "2011-08-14",
		Salary: "$206,850",
	},
	{
		Id: "29",
		Name: "Fiona Green",
		Position: "Chief Operating Officer (COO)",
		Office: "San Francisco",
		Age: "48",
		date: "2009-10-09",
		Salary: "$850,000",
	},
	{
		Id: "30",
		Name: "Shou Itou",
		Position: "Regional Marketing",
		Office: "Tokyo",
		Age: "20",
		date: "2011-09-03",
		Salary: "$163,000",
	},
	{
		Id: "31",
		Name: "Michelle House",
		Position: "Integration Specialist",
		Office: "Sidney",
		Age: "37",
		date: "2011-04-25",
		Salary: "$95,400",
	},
	{
		Id: "32",
		Name: "Suki Burks",
		Position: "Developer",
		Office: "London",
		Age: "53",
		date: "2012-11-27",
		Salary: "$114,500",
	},
	{
		Id: "33",
		Name: "Prescott Bartlett",
		Position: "Technical Author",
		Office: "London",
		Age: "27",
		date: "2009-06-25",
		Salary: "$145,000",
	},
	{
		Id: "34",
		Name: "Gavin Cortez",
		Position: "Team Leader",
		Office: "San Francisco",
		Age: "22",
		date: "2008-11-13",
		Salary: "$235,500",
	},
	{
		Id: "35",
		Name: "Martena Mccray",
		Position: "Post-Sales support",
		Office: "Edinburgh",
		Age: "46",
		date: "2013-02-01",
		Salary: "$324,050",
	},
	{
		Id: "36",
		Name: "Unity Butler",
		Position: "Marketing Designer",
		Office: "San Francisco",
		Age: "47",
		date: "2012-09-26",
		Salary: "$85,675",
	},
	{
		Id: "37",
		Name: "Howard Hatfield",
		Position: "Office Manager",
		Office: "San Francisco",
		Age: "51",
		date: "2011-06-02",
		Salary: "$164,500",
	},
	{
		Id: "38",
		Name: "Hope Fuentes",
		Position: "Secretary",
		Office: "San Francisco",
		Age: "41",
		date: "2008-10-26",
		Salary: "$109,850",
	},
	{
		Id: "39",
		Name: "Vivian Harrell",
		Position: "Financial Controller",
		Office: "San Francisco",
		Age: "62",
		date: "2009-02-14",

		Salary: "$452,500",
	},
	{
		Id: "40",
		Name: "Timothy Mooney",
		Position: "Office Manager",
		Office: "London",
		Age: "37",
		date: "2008-12-16",
		Salary: "$136,200",
	},
	{
		Id: "41",
		Name: "Jackson Bradshaw",
		Position: "Director",
		Office: "New York",
		Age: "65",
		date: "2009-10-22",
		Salary: "$645,750",
	},
	{
		Id: "42",
		Name: "Olivia Liang",
		Position: "Support Engineer",
		Office: "Singapore",
		Age: "64",
		date: "2009-10-22",
		Salary: "$234,500",
	},
	{
		Id: "43",
		Name: "Bruno Nash",
		Position: "Software Engineer",
		Office: "London",
		Age: "38",
		date: "2008-12-11",

		Salary: "$163,500",
	},
	{
		Id: "44",
		Name: "Sakura Yamamoto",
		Position: "Support Engineer",
		Office: "Tokyo",
		Age: "37",
		date: "2010-03-11",
		Salary: "$139,575",
	},
	{
		Id: "45",
		Name: "Thor Walton",
		Position: "Developer",
		Office: "New York",
		Age: "61",
		date: "2011-05-07",
		Salary: "$98,540",
	},
	{
		Id: "46",
		Name: "Finn Camacho",
		Position: "Support Engineer",
		Office: "San Francisco",
		Age: "47",
		date: "2009-10-22",

		Salary: "$87,500",
	},
	{
		Id: "47",
		Name: "Serge Baldwin",
		Position: "Data Coordinator",
		Office: "Singapore",
		Age: "64",
		date: "2008-10-26",
		Salary: "$138,575",
	},
	{
		Id: "48",
		Name: "Zenaida Frank",
		Position: "Software Engineer",
		Office: "New York",
		Age: "63",
		date: "2009-10-09",

		Salary: "$125,250",
	},
	{
		Id: "49",
		Name: "Zorita Serrano",
		Position: "Software Engineer",
		Office: "San Francisco",
		Age: "56",
		date: "2011-05-07",
		Salary: "$115,000",
	},
	{
		Id: "50",
		Name: "Jennifer Acosta",
		Position: "Junior Javascript Developer",
		Office: "Edinburgh",
		Age: "43",
		date: "2011-06-07",
		Salary: "$75,650",
	},
	{
		Id: "51",
		Name: "Cara Stevens",
		Position: "Sales Assistant",
		Office: "New York",
		Age: "46",
		date: "2009-02-14",

		Salary: "$145,600",
	},
	{
		Id: "52",
		Name: "Hermione Butler",
		Position: "Regional Director",
		Office: "London",
		Age: "47",
		date: "2011-03-09",

		Salary: "$356,250",
	},
	{
		Id: "53",
		Name: "Lael Greer",
		Position: "Systems Administrator",
		Office: "London",
		Age: "21",
		date: "2009-02-14",

		Salary: "$103,500",
	},
	{
		Id: "54",
		Name: "Jonas Alexander",
		Position: "Developer",
		Office: "San Francisco",
		Age: "30",
		date: "2011-12-06",

		Salary: "$86,500",
	},
	{
		Id: "55",
		Name: "Shad Decker",
		Position: "Regional Director",
		Office: "Edinburgh",
		Age: "51",
		date: "2011-03-21",

		Salary: "$183,000",
	},
	{
		Id: "56",
		Name: "Michael Bruce",
		Position: "Javascript Developer",
		Office: "Singapore",
		Age: "29",
		date: "2009-02-27",

		Salary: "$183,000",
	},
	{
		Id: "57",
		Name: "Donna Snider",
		Position: "Customer Support",
		Office: "New York",
		Age: "27",
		date: "2010-07-14",
		Salary: "$112,000",
	},
	{
		Id: "58",
		Name: "Fiona Green",
		Position: "Chief Operating Officer (COO)",
		Office: "San Francisco",
		Age: "48",
		date: "2008-11-13",
		Salary: "$850,000",
	},
	{
		Id: "59",
		Name: "Shou Itou",
		Position: "Regional Marketing",
		Office: "Tokyo",
		Age: "20",
		date: "2011-06-27",
		Salary: "$163,000",
	},
	{
		Id: "60",
		Name: "Prescott Bartlett",
		Position: "Technical Author",
		Office: "London",
		Age: "27",
		date: "2011-01-25",
		Salary: "$145,000",
	},
];

export const GlobalFilter = ({ filter, setFilter }: any) => {
	return (
		<span className="ms-auto">
			<input
				value={filter || ""}
				onChange={(e) => setFilter(e.target.value)}
				className="form-control w-auto"
				placeholder="Search..."
			/>
		</span>
	);
};

//DELETE ROW TABLE

const EditableRow = ({
	editFormData,
	handleEditFormChange,
	handleCancelClick,
}: any) => {
	return (
		<tr>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="S NO"
					name="Sno"
					value={editFormData.sno}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="Enter a name..."
					name="Name"
					value={editFormData.Name}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="Enter an lastname..."
					name="lastname"
					value={editFormData.lastname}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="text"
					required
					placeholder="Enter a phone number..."
					name="position"
					value={editFormData.position}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="email"
					required
					placeholder="Enter an email..."
					name="email"
					value={editFormData.email}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<Form.Control
					type="salary"
					required
					placeholder="Salary..."
					name="salary"
					value={editFormData.salary}
					onChange={handleEditFormChange}
					className="border"
				></Form.Control>
			</td>
			<td>
				<SpkButton Buttonvariant="primary" Customclass="me-1" Buttontype="submit">
					Save
				</SpkButton>
				<SpkButton
					Buttonvariant=""
					Customclass="btn btn-danger me-1"

					onClickfunc={handleCancelClick}
				>
					Cancel
				</SpkButton>
			</td>
		</tr>
	);
};

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }: any) => {
	return (
		<tr>
			<td className="wd-5p text-center">{contact.sno}</td>
			<td>{contact.Name}</td>
			<td>{contact.lastname}</td>
			<td>{contact.position}</td>
			<td>{contact.email}</td>
			<td>{contact.salary}</td>
			<td>
				<SpkButton
					Buttonvariant=""
					Customclass="btn btn-primary me-1"
					Buttontype="button"
					onClickfunc={(event: any) => handleEditClick(event, contact)}
				>
					Edit
				</SpkButton>
				<SpkButton
					Buttonvariant=""
					Customclass="btn btn-danger me-1"
					Buttontype="button"
					onClickfunc={() => handleDeleteClick(contact.id)}
				>
					Delete
				</SpkButton>
			</td>
		</tr>
	);
};

export const Deletetable = () => {
	const [modalShow, setModalShow] = useState(false);
	const data = [
		{
			id: "1",
			sno: "1",
			Name: "Yonna",
			lastname: "Qond",
			position: "Financial Controller",
			email: "jacke123@gmail.com",
			salary: "$143,654",
		},
		{
			id: "2",
			sno: "2",
			Name: "Zonna",
			lastname: "Jond",
			position: "Accountant",
			email: "virginia456@gmail.com",
			salary: "$343,654",
		},
		{
			id: "3",
			sno: "3",
			Name: "Nonna",
			lastname: "Tond",
			position: "Chief Executive Officer",
			email: "jacobthomson@gmail.com",
			salary: "$743,654",
		},
		{
			id: "4",
			sno: "4",
			Name: "Bonna",
			lastname: "Oond",
			position: "Chief Operating Officer",
			email: "trevor@gmail.com",
			salary: "$643,654",
		},
		{
			id: "5",
			sno: "5",
			Name: "Honna",
			lastname: "Pond",
			position: "Data Coordinator",
			email: "kylie@gmail.com",
			salary: "$243,654",
		},
		{
			id: "6",
			sno: "6",
			Name: "Fonna",
			lastname: "Nond",
			position: "Developer",
			email: "jan@gmail.com",
			salary: "$543,654",
		},
		{
			id: "7",
			sno: "7",
			Name: "Aonna",
			lastname: "Xond",
			position: "Development lead",
			email: "trevor@gmail.com",
			salary: "$843,654",
		},
		{
			id: "8",
			sno: "8",
			Name: "Qonna",
			lastname: "Vond",
			position: "Director",
			email: "kylie@gmail.com",
			salary: "$843,654",
		},
		{
			id: "9",
			sno: "9",
			Name: "Jond",
			lastname: "Zonna",
			position: "Marketing Officer",
			email: "emily@gmail.com",
			salary: "$843,654",
		},
		{
			id: "10",
			sno: "10",
			Name: "Yonna",
			lastname: "Qond",
			position: "Financial Controller",
			email: "jan@gmail.com",
			salary: "$433,060",
		},
	];
	const [contacts, setContacts] = useState(data);
	const [addFormData, setAddFormData] = useState({
		sno: "",
		Name: "",
		lastname: "",
		position: "",
		email: "",
		salary: "",
	});

	const [editFormData, setEditFormData] = useState({
		sno: "",
		Name: "",
		lastname: "",
		position: "",
		email: "",
		salary: "",
	});

	const [editContactId, setEditContactId] = useState<any>(null);

	const handleAddFormChange = (event: any) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData: any = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const handleEditFormChange = (event: any) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData: any = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	const handleAddFormSubmit = (event: any) => {
		event.preventDefault();

		const newContact = {
			id: nanoid(),
			sno: addFormData.sno,
			Name: addFormData.Name,
			lastname: addFormData.lastname,
			position: addFormData.position,
			email: addFormData.email,
			salary: addFormData.salary,
		};

		const newContacts = [...contacts, newContact];
		setContacts(newContacts);
	};

	const handleEditFormSubmit = (event: any) => {
		event.preventDefault();

		const editedContact = {
			id: editContactId,
			sno: editFormData.sno,
			Name: editFormData.Name,
			lastname: editFormData.lastname,
			position: editFormData.position,
			email: editFormData.email,
			salary: editFormData.salary,
		};

		const newContacts = [...contacts];

		const index = contacts.findIndex((contact) => contact.id === editContactId);

		newContacts[index] = editedContact;

		setContacts(newContacts);
		setEditContactId(null);
	};

	const handleEditClick = (event: any, contact: any) => {
		event.preventDefault();
		setEditContactId(contact.id);

		const formValues = {
			sno: contact.sno,
			Name: contact.Name,
			lastname: contact.lastname,
			position: contact.position,
			email: contact.email,
			salary: contact.salary,
		};

		setEditFormData(formValues);
	};

	const handleCancelClick = () => {
		setEditContactId(null);
	};

	const handleDeleteClick = (contactId: any) => {
		const newContacts = [...contacts];

		const index = contacts.findIndex((contact) => contact.id === contactId);

		newContacts.splice(index, 1);

		setContacts(newContacts);
	};

	return (
		<div className="app-container">
			<Form onSubmit={handleEditFormSubmit}>
				<SpkButton
					Buttonvariant=""
					Customclass="btn btn-primary mb-3"
					onClickfunc={() => setModalShow(true)}
				>
					Add New Row
				</SpkButton>
				<div className="table-responsive">
					<Table
						id="delete-datatable"
						className="table table-bordered text-nowrap border-bottom"
					>
						<thead>
							<tr>
								<th className="wd-5p text-center">S NO</th>
								<th>Name</th>
								<th>Last Name</th>
								<th>Position</th>
								<th>Email</th>
								<th>Salary</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{contacts.map((contact) => (
								<Fragment key={contact.id}>
									{editContactId === contact.id ? (
										<EditableRow
											editFormData={editFormData}
											handleEditFormChange={handleEditFormChange}
											handleCancelClick={handleCancelClick}
										/>
									) : (
										<ReadOnlyRow
											contact={contact}
											handleEditClick={handleEditClick}
											handleDeleteClick={handleDeleteClick}
										/>
									)}
								</Fragment>
							))}
						</tbody>
					</Table>
				</div>
			</Form>

			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title className="h6" id="contained-modal-title-vcenter">
						Add New Row
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleAddFormSubmit} className="">
						<Form.Control
							type="text"
							name="sno"
							required
							placeholder="S No..."
							onChange={handleAddFormChange}
							className="form-control mb-2 border"
						/>
						<Form.Control
							type="text"
							name="Name"
							required
							placeholder="Enter a name..."
							onChange={handleAddFormChange}
							className="form-control mb-2 border"
						/>
						<Form.Control
							type="text"
							name="lastname"
							required
							placeholder="Enter an lastname..."
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<Form.Control
							type="text"
							name="position"
							required
							placeholder="Position..."
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<Form.Control
							type="email"
							name="email"
							required
							placeholder="Enter an email..."
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<Form.Control
							type="salary"
							name="salary"
							required
							placeholder="Salary..."
							onChange={handleAddFormChange}
							className="form-control mb-2"
						/>
						<SpkButton
							Buttonvariant=""
							Customclass="btn btn-primary me-2 wd-100p "
							Buttontype="submit"
						>
							Add
						</SpkButton>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<SpkButton
						Customclass="btn btn-primary wd-20p"
						onClickfunc={() => setModalShow(false)}
					>
						Close
					</SpkButton>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

//Material ui Tables

interface Column {
	id: 'name' | 'code' | 'population' | 'size' | 'density';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
	{
		id: 'population',
		label: 'Population',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'size',
		label: 'Size\u00a0(km\u00b2)',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'density',
		label: 'Density',
		minWidth: 170,
		align: 'right',
		format: (value: number) => value.toFixed(2),
	},
];

interface Data {
	name: string;
	code: string;
	population: number;
	size: number;
	density: number;
}

function createData(
	name: string,
	code: string,
	population: number,
	size: number,
): Data {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [
	createData('India', 'IN', 1324171354, 3287263),
	createData('China', 'CN', 1403500365, 9596961),
	createData('Italy', 'IT', 60483973, 301340),
	createData('United States', 'US', 327167434, 9833520),
	createData('Canada', 'CA', 37602103, 9984670),
	createData('Australia', 'AU', 25475400, 7692024),
	createData('Germany', 'DE', 83019200, 357578),
	createData('Ireland', 'IE', 4857000, 70273),
	createData('Mexico', 'MX', 126577691, 1972550),
	createData('Japan', 'JP', 126317000, 377973),
	createData('France', 'FR', 67022000, 640679),
	createData('United Kingdom', 'GB', 67545757, 242495),
	createData('Russia', 'RU', 146793744, 17098246),
	createData('Nigeria', 'NG', 200962417, 923768),
	createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table" className="table-bordered sticky-header-table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell className="!border-b !border-defaultborder"
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align} className="!border-b !border-defaultborder">
													{column.format && typeof value === 'number'
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}



const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData1(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number,
) {
	return { name, calories, fat, carbs, protein };
}

const rows1 = [
	createData1('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData1('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData1('Eclair', 262, 16.0, 24, 6.0),
	createData1('Cupcake', 305, 3.7, 67, 4.3),
	createData1('Gingerbread', 356, 16.0, 49, 3.9),
];

export function CustomizedTables() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table" className="table-bordered ">
				<TableHead>
					<TableRow>
						<StyledTableCell>Dessert (100g serving)</StyledTableCell>
						<StyledTableCell align="right">Calories</StyledTableCell>
						<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
						<StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
						<StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows1.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row" className="!border-b !border-defaultborder" >
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="right" className="border-b">{row.calories}</StyledTableCell>
							<StyledTableCell align="right" className="border-b">{row.fat}</StyledTableCell>
							<StyledTableCell align="right" className="border-b">{row.carbs}</StyledTableCell>
							<StyledTableCell align="right" className="border-b">{row.protein}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

//End Material ui Tables


