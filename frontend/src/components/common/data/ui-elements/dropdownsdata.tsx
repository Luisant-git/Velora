
export const SingleButtons: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "primary1" },
	{ id: 3, class: "primary2" },
	{ id: 4, class: "primary3" },
	{ id: 5, class: "secondary" },
	{ id: 6, class: "success" },
	{ id: 7, class: "info" },
	{ id: 8, class: "warning" },
	{ id: 9, class: "danger" }
];

export const OutlineButtons: split[] = [
	{ id: 1, class: "outline-primary" },
	{ id: 2, class: "outline-primary1" },
	{ id: 3, class: "outline-primary2" },
	{ id: 4, class: "outline-primary3" },
	{ id: 5, class: "outline-secondary" },
	{ id: 6, class: "outline-success" },
	{ id: 7, class: "outline-info" },
	{ id: 8, class: "outline-warning" },
	{ id: 9, class: "outline-danger" }
];
interface split {
	id: number
	class: string
}
export const SplitButtonsdata: split[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "primary1" },
	{ id: 3, class: "primary2" },
	{ id: 4, class: "primary3" },
	{ id: 5, class: "secondary" },
	{ id: 6, class: "info" },
	{ id: 7, class: "success" },
	{ id: 8, class: "warning" },
	{ id: 9, class: "danger" }
];
interface sizing {
	id: number
	text1: string
	text2: string
	class: string
	size: string
}
export const SizingButtons: sizing[] = [
	{ id: 1, class: "primary", size: "lg", text1: "Large button", text2: "Large split button" },
	{ id: 2, class: "primary", size: "sm", text1: "Small  button", text2: "Small split button" },
];
interface autoclose {
	id: number
	text: string
	class: string
}
export const AutocloseButtons: autoclose[] = [
	{ id: 1, class: "primary", text: "Default dropdown" },
	{ id: 2, class: "secondary", text: "Clickable  outside" },
	{ id: 3, class: "info", text: "Clickable  inside" },
	{ id: 4, class: "warning", text: "Manual  close" },
];
interface custombutton {
	id: number
	text: string
	class: string
	class1: string
}
export const CustomButtons: custombutton[] = [
	{ id: 1, class: "primary", text: "Primary", class1: "dropdown-menu-primary" },
	{ id: 2, class: "secondary", text: "Secondary", class1: "dropdown-menu-secondary" },
	{ id: 3, class: "warning", text: "warning", class1: "dropmenu-item-warning" },
	{ id: 4, class: "info", text: "info", class1: "dropmenu-item-info" },
	{ id: 5, class: "success", text: "success", class1: "dropmenu-light-success" },
	{ id: 6, class: "danger", text: "danger", class1: "dropmenu-light-danger" }
];
interface ghost {
	id: number
	text: string
	class: string
}
export const GhostButtons: ghost[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 2, class: "primary1-ghost", text: "Primary1" },
	{ id: 3, class: "primary2-ghost", text: "Primary2" },
	{ id: 4, class: "primary3-ghost", text: "Primary3" },
	{ id: 5, class: "secondary-ghost", text: "Secondary" },
	{ id: 6, class: "warning-ghost", text: "warning" },
	{ id: 7, class: "info-ghost", text: "info" },
	{ id: 8, class: "success-ghost", text: "success" },
	{ id: 9, class: "danger-ghost", text: "danger" }
];
interface alignment {
	id: number
	text: string
	class: string
	dir: string
}
export const AlignmentButtons: alignment[] = [
	{ id: 1, class: "primary", text: "Dropdown", dir: "" },
	{ id: 2, class: "secondary", text: "Right-aligned menu", dir: "" },
	{ id: 3, class: "info", text: "Left-aligned, right-aligned lg", dir: "" },
	{ id: 4, class: "warning", text: "Right-aligned, left-aligned lg", dir: "" },
	{ id: 5, class: "success", text: "Dropstart", dir: "start" },
	{ id: 6, class: "danger", text: "Dropend", dir: "end" },
	{ id: 7, class: "teal", text: "Dropup", dir: "up" }
];

