interface buttons1 {
	id: number
	text: string
	class: string
}
export const DefaultButtons: buttons1[] = [
	{ id: 1, class: "primary", text: " Primary" },
	{ id: 2, class: "primary1", text: " Primary1" },
	{ id: 3, class: "primary2", text: " Primary2" },
	{ id: 4, class: "primary3", text: " Primary3" },
	{ id: 5, class: "secondary", text: "  Secondary" },
	{ id: 6, class: "success", text: " Success" },
	{ id: 7, class: "danger", text: "  Danger" },
	{ id: 8, class: "warning", text: "  Warning" },
	{ id: 9, class: "info", text: "Info" },
	{ id: 10, class: "light", text: " Light" },
	{ id: 11, class: "dark", text: "  Dark" },
	{ id: 12, class: "link", text: "Link" },
];
// Light Buttons//

export const LightButtons: buttons1[] = [
	{ id: 1, class: "primary-light", text: " Primary" },
	{ id: 2, class: "primary1-light", text: " Primary1" },
	{ id: 3, class: "primary2-light", text: " Primary2" },
	{ id: 4, class: "primary3-light", text: " Primary3" },
	{ id: 5, class: "secondary-light", text: "  Secondary" },
	{ id: 6, class: "success-light", text: " Success" },
	{ id: 7, class: "danger-light", text: "  Danger" },
	{ id: 8, class: "warning-light", text: "  Warning" },
	{ id: 9, class: "info-light", text: "Info" },
	{ id: 10, class: "purple-light", text: " purple" },
	{ id: 11, class: "teal-light", text: "  teal" },
	{ id: 12, class: "orange-light", text: "orange" }
];

export const OutlineButtons: buttons1[] = [
	{ id: 1, class: "outline-primary", text: " Primary" },
	{ id: 2, class: "outline-primary1", text: " Primary1" },
	{ id: 3, class: "outline-primary2", text: " Primary2" },
	{ id: 4, class: "outline-primary3", text: " Primary3" },
	{ id: 5, class: "outline-secondary", text: "  Secondary" },
	{ id: 6, class: "outline-success", text: " Success" },
	{ id: 7, class: "outline-danger", text: "  Danger" },
	{ id: 8, class: "outline-warning", text: "  Warning" },
	{ id: 9, class: "outline-info", text: "Info" },
	{ id: 10, class: "outline-light", text: " Light" },
	{ id: 11, class: "outline-dark", text: "  Dark" },
];

export const GradientButtons: buttons1[] = [
	{ id: 1, class: "primary-gradient", text: "Primary" },
	{ id: 2, class: "primary1-gradient", text: "Primary1" },
	{ id: 3, class: "primary2-gradient", text: "Primary2" },
	{ id: 4, class: "primary3-gradient", text: "Primary3" },
	{ id: 5, class: "secondary-gradient", text: "Secondary" },
	{ id: 6, class: "success-gradient", text: "Success" },
	{ id: 7, class: "danger-gradient", text: "Danger" },
	{ id: 8, class: "warning-gradient", text: "Warning" },
	{ id: 9, class: "info-gradient", text: "Info" },
	{ id: 10, class: "orange-gradient", text: " Orange" },
	{ id: 11, class: "purple-gradient", text: "Purple" },
	{ id: 12, class: "teal-gradient", text: "  teal" },
];

export const GhostButtons: buttons1[] = [
	{ id: 1, class: "primary-ghost", text: "Primary" },
	{ id: 1, class: "primary1-ghost", text: "Primary1" },
	{ id: 1, class: "primary2-ghost", text: "Primary2" },
	{ id: 1, class: "primary3-ghost", text: "Primary3" },
	{ id: 2, class: "secondary-ghost", text: "Secondary" },
	{ id: 3, class: "success-ghost", text: "Success" },
	{ id: 4, class: "danger-ghost", text: "Danger" },
	{ id: 5, class: "warning-ghost", text: "Warning" },
	{ id: 6, class: "info-ghost", text: "Info" },
	{ id: 5, class: "orange-ghost", text: "orange" },
	{ id: 6, class: "purple-ghost", text: "Purple" },
	{ id: 6, class: "teal-ghost", text: "Teal" },
];
interface SocialIcon {
	id: number
	class: string
	class1: string;
}
export const SocialIconButtons: SocialIcon[] = [
	{ id: 1, class: "facebook", class1: "facebook" },
	{ id: 2, class: "twitter-x", class1: "twitter" },
	{ id: 3, class: "instagram", class1: "instagram" },
	{ id: 4, class: "github", class1: "github" },
	{ id: 5, class: "youtube", class1: "youtube" },
	{ id: 5, class: "google", class1: "google" },

];
interface coloredbtn {
	id: number
	class: string
}
export const ColoredButtons: coloredbtn[] = [
	{ id: 1, class: "primary" },
	{ id: 2, class: "primary1" },
	{ id: 3, class: "primary2" },
	{ id: 4, class: "primary3" },
	{ id: 5, class: "secondary" },
	{ id: 6, class: "success" },
	{ id: 7, class: "info" },
	{ id: 8, class: "warning" },
	{ id: 9, class: "danger" },
	{ id: 10, class: "purple" },
	{ id: 11, class: "orange" },

];
interface labelbtn {
	id: number
	color: string
	class: string
}
export const LabelButtons: labelbtn[] = [
	{ id: 1, color: "primary", class: "chat-smile" },
	{ id: 2, color: "secondary", class: "settings-4" },
	{ id: 3, color: "warning", class: "spam-2" },
	{ id: 4, color: "info", class: "phone" },
	{ id: 5, color: "success", class: "thumb-up" },
	{ id: 6, color: "danger", class: "close" },

];

