
interface colorspinner {
	id: number
	color: string
}

export const Colorspinner: colorspinner[] = [
	{ id: 1, color: "primary" },
	{ id: 2, color: "primary1" },
	{ id: 3, color: "primary2" },
	{ id: 4, color: "primary3" },
	{ id: 5, color: "secondary" },
	{ id: 6, color: "success" },
	{ id: 7, color: "danger" },
	{ id: 8, color: "warning" },
	{ id: 9, color: "info" },
	{ id: 10, color: "light" },
	{ id: 11, color: "dark" }
];

interface btnspinner {
	id: number
	color: string
	class: string
}
export const Buttonspinner: btnspinner[] = [
	{ id: 1, color: "primary-light", class: "" },
	{ id: 2, color: "primary1-light", class: "" },
	{ id: 3, color: "primary2-light", class: "" },
	{ id: 4, color: "primary3-light", class: "" },
	{ id: 5, color: "secondary-light", class: "" },
	{ id: 6, color: "success-light", class: "" },
	{ id: 7, color: "info-light", class: "" },
	{ id: 8, color: "warning-light", class: "" },
	{ id: 9, color: "danger-light", class: "" },
	{ id: 10, color: "light", class: "" },
	{ id: 11, color: "dark", class: "text-dark" }
];

