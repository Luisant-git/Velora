
import face3 from "../../../../assets/images/faces/3.jpg"
import face11 from "../../../../assets/images/faces/11.jpg"
import face10 from "../../../../assets/images/faces/10.jpg"
import face12 from "../../../../assets/images/faces/12.jpg"
import face9 from "../../../../assets/images/faces/9.jpg"
import face13 from "../../../../assets/images/faces/13.jpg"
import face14 from "../../../../assets/images/faces/14.jpg"
import face5 from "../../../../assets/images/faces/5.jpg"
import face8 from "../../../../assets/images/faces/8.jpg"
import face15 from "../../../../assets/images/faces/15.jpg"

interface alert1 {
	id: number
	text: string
	class: string
}

export const Defaultalerts: alert1[] = [
	{ id: 1, text: " A simple primary alert—check it out!", class: "primary" },
	{ id: 2, text: " A simple primary1 alert—check it out!", class: "primary1" },
	{ id: 3, text: " A simple primary2 alert—check it out!", class: "primary2" },
	{ id: 4, text: " A simple primary3 alert—check it out!", class: "primary3" },
	{ id: 5, text: " A simple secondary alert—check it out!", class: "secondary" },
	{ id: 6, text: " A simple success alert—check it out!", class: "success" },
	{ id: 7, text: " A simple danger alert—check it out!", class: "danger" },
	{ id: 8, text: " A simple warning alert—check it out!", class: "warning" },
	{ id: 9, text: " A simple info alert—check it out!", class: "info" },
	{ id: 10, text: " A simple light alert—check it out!", class: "light" },
	{ id: 11, text: " A simple dark alert—check it out!", class: "dark" },
];

interface alert2 {
	text1: string
	text2: string
	text3: string
	class: string
}
export const Linkalerts: alert2[] = [
	{ text1: "A simple primary alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "primary" },
	{ text1: "A simple primary1 alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "primary1" },
	{ text1: "A simple primary2 alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "primary2" },
	{ text1: "A simple primary3 alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "primary3" },
	{ text1: "A simple secondary alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "secondary" },
	{ text1: "A simple success alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "success" },
	{ text1: "A simple danger alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "danger" },
	{ text1: "A simple warning alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "warning" },
	{ text1: "A simple info alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "info" },
	{ text1: "A simple light alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "light" },
	{ text1: "A simple dark alert with ", text2: "an example link. ", text3: "Give it a click if you like.", class: "dark" },

];
interface alert3 {
	id: number
	text: string
	color: string
	class: string
}
export const Solidalerts: alert3[] = [
	{ id: 1, text: "A simple solid primary alert—check it out! ", class: "solid-primary", color: "" },
	{ id: 2, text: "A simple solid primary1 alert—check it out! ", class: "solid-primary1", color: "" },
	{ id: 3, text: "A simple solid primary2 alert—check it out! ", class: "solid-primary2", color: "" },
	{ id: 4, text: "A simple solid primary3 alert—check it out! ", class: "solid-primary3", color: "" },
	{ id: 5, text: "A simple solid secondary alert—check it out!", class: "solid-secondary", color: "" },
	{ id: 6, text: "A simple solid info alert—check it out!", class: "solid-info", color: "" },
	{ id: 7, text: "A simple solid warning alert—check it out! ", class: "solid-warning", color: "" },
	{ id: 8, text: "A simple solid success alert—check it out!", class: "solid-success", color: "" },
	{ id: 9, text: "A simple solid danger alert—check it out! ", class: "solid-danger", color: "" },
	{ id: 10, text: "A simple solid light alert—check it out! ", class: "solid-light", color: "text-default" },
	{ id: 11, text: "A simple solid dark alert—check it out!", class: "solid-dark", color: "text-white" },

];

export const Outlinealerts: alert3[] = [
	{ id: 1, text: "A simple outline primary alert—check it out! ", class: "outline-primary", color: "" },
	{ id: 2, text: "A simple outline primary1 alert—check it out! ", class: "outline-primary1", color: "" },
	{ id: 3, text: "A simple outline primary2 alert—check it out! ", class: "outline-primary2", color: "" },
	{ id: 4, text: "A simple outline primary3 alert—check it out! ", class: "outline-primary3", color: "" },
	{ id: 5, text: "A simple outline secondary alert—check it out!", class: "outline-secondary", color: "" },
	{ id: 6, text: "A simple outline info alert—check it out!", class: "outline-info", color: "" },
	{ id: 7, text: "A simple outline warning alert—check it out! ", class: "outline-warning", color: "" },
	{ id: 8, text: "A simple outline success alert—check it out!", class: "outline-success", color: "" },
	{ id: 9, text: "A simple outline danger alert—check it out! ", class: "outline-danger", color: "" },
	{ id: 10, text: "A simple outline light alert—check it out! ", class: "outline-light", color: "text-default" },
	{ id: 11, text: "A simple outline dark alert—check it out!", class: "outline-dark", color: "" },

];
export const Roundedsolidalerts: alert1[] = [
	{ id: 1, text: "A simple solid rounded primary alert—check it out! ", class: "solid-primary" },
	{ id: 2, text: "A simple solid rounded primary1 alert—check it out! ", class: "solid-primary1" },
	{ id: 3, text: "A simple solid rounded primary2 alert—check it out! ", class: "solid-primary2" },
	{ id: 4, text: "A simple solid rounded primary3 alert—check it out! ", class: "solid-primary3" },
	{ id: 5, text: "A simple solid rounded secondary alert—check it out! ", class: "solid-secondary" },
	{ id: 6, text: "A simple solid rounded warning alert—check it out! ", class: "solid-warning" },
	{ id: 7, text: "A simple solid rounded danger alert—check it out!", class: "solid-danger" }
];
export const Roundedoutlinealerts: alert1[] = [
	{ id: 1, text: "A simple outline rounded primary alert—check it out! ", class: "outline-primary" },
	{ id: 2, text: "A simple outline rounded primary1 alert—check it out! ", class: "outline-primary1" },
	{ id: 3, text: "A simple outline rounded primary2 alert—check it out! ", class: "outline-primary2" },
	{ id: 4, text: "A simple outline rounded primary3 alert—check it out! ", class: "outline-primary3" },
	{ id: 5, text: "A simple outline rounded secondary alert—check it out! ", class: "outline-secondary" },
	{ id: 6, text: "A simple outline rounded warning alert—check it out! ", class: "outline-warning" },
	{ id: 7, text: "A simple outline rounded danger alert—check it out!", class: "outline-danger" }
];
interface alert4 {
	id: number
	text: string
	class: string
	size: string
}
export const Shadowsolidalerts: alert4[] = [
	{ id: 1, text: "A simple solid primary alert with small shadow—check it out! ", class: "solid-primary", size: "sm" },
	{ id: 2, text: "A simple solid primary alert with normal shadow—check it out! ", class: "solid-primary", size: "" },
	{ id: 3, text: "A simple solid primary alert with large shadow—check it out! ", class: "solid-primary", size: "lg" },
	{ id: 4, text: "A simple solid secondary alert with small shadow—check it out!", class: "solid-secondary", size: "sm" },
	{ id: 5, text: "A simple solid secondary alert with normal shadow—check it out!", class: "solid-secondary", size: "" },
	{ id: 6, text: "A simple solid secondary alert with large shadow—check it out!", class: "solid-secondary", size: "lg" },

];
interface alert5 {
	text: string
	class: string
	size: string
}
export const Defaultsolidalerts: alert5[] = [
	{ text: "A simple primary alert with small shadow—check it out! ", class: "primary", size: "sm" },
	{ text: "A simple primary alert with normal shadow—check it out! ", class: "primary", size: "" },
	{ text: "A simple primary alert with large shadow—check it out! ", class: "primary", size: "lg" },
	{ text: "A simple secondary alert with small shadow—check it out!", class: "secondary", size: "sm" },
	{ text: "A simple secondary alert with normal shadow—check it out!", class: "secondary", size: "" },
	{ text: "A simple secondary alert with large shadow—check it out!", class: "secondary", size: "lg" },
];
export const Roundedefaultalerts: alert1[] = [
	{ id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
	{ id: 2, text: "A simple rounded primary1 alert—check it out! ", class: "primary1" },
	{ id: 3, text: "A simple rounded primary2 alert—check it out! ", class: "primary2" },
	{ id: 4, text: "A simple rounded primary3 alert—check it out! ", class: "primary3" },
	{ id: 5, text: "A simple rounded secondary alert—check it out! ", class: "secondary" },
	{ id: 6, text: "A simple rounded warning alert—check it out! ", class: "warning" },
	{ id: 7, text: "A simple rounded danger alert—check it out!", class: "danger" }
];
export const Roundewithbtnalerts: alert1[] = [
	{ id: 1, text: "A simple rounded primary alert—check it out! ", class: "primary" },
	{ id: 2, text: "A simple rounded secondary alert—check it out! ", class: "secondary" },
	{ id: 3, text: "A simple rounded warning alert—check it out! ", class: "warning" },
	{ id: 4, text: "A simple rounded danger alert—check it out!", class: "danger" }
];
interface alert6 {
	id: number
	class1: string
	color: string
}
export const Customizedalert1: alert6[] = [
	{ id: 1, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", color: "primary" },
	{ id: 2, class1: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", color: "secondary", },
	{ id: 3, class1: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", color: "warning", },
	{ id: 4, class1: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", color: "danger", },
];

interface alert7 {
	id: number
	src1: string
	color: string
	class: string
}
export const Imagealerts: alert7[] = [
	{ id: 1, src1: face3, color: "primary", class: "" },
	{ id: 1, src1: face9, color: "primary1", class: "" },
	{ id: 1, src1: face12, color: "primary2", class: "" },
	{ id: 1, src1: face15, color: "primary3", class: "" },
	{ id: 2, src1: face5, color: "secondary", class: "" },
	{ id: 3, src1: face8, color: "warning", class: "" },
	{ id: 4, src1: face11, color: "danger", class: "" },
	{ id: 5, src1: face13, color: "info", class: "" },
	{ id: 6, src1: face10, color: "light", class: "" },
	{ id: 7, src1: face15, color: "dark", class: "text-muted" },
];

interface alert8 {
	id: number
	src1: string
	color: string
	class: string
	class1: string
}
export const avatarsizealert: alert8[] = [
	{ id: 1, src1: face3, color: "primary", class: "xs", class1: "" },
	{ id: 1, src1: face3, color: "primary1", class: "xs", class1: "" },
	{ id: 1, src1: face3, color: "primary2", class: "xs", class1: "" },
	{ id: 1, src1: face3, color: "primary3", class: "xs", class1: "" },
	{ id: 2, src1: face5, color: "secondary", class: "sm", class1: "" },
	{ id: 3, src1: face8, color: "warning", class: "", class1: "" },
	{ id: 4, src1: face11, color: "danger", class: "md", class1: "" },
	{ id: 5, src1: face13, color: "info", class: "lg", class1: "" },
	{ id: 6, src1: face14, color: "dark", class: "xl", class1: "text-muted" },
];

const svg1 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>

const svg2 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>

const svg3 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>

const svg4 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>

interface alert9 {
	id: number
	color: string
	class: string
	class1: any
	text1: string
	text2: string
	btn1: string
	btn2: string
}
export const Svgalert1: alert9[] = [
	{ id: 1, class1: svg1, text1: "Information Alert", text2: "Information alert to show to information", color: "primary", btn1: "cancel", btn2: "open", class: "" },
	{ id: 2, class1: svg2, text1: "Success Alert", text2: "Success alert to show to success message", color: "success", btn1: "", btn2: "close", class: "d-none" },
	{ id: 3, class1: svg3, text1: "Warning Alert", text2: "Warning alert to show warning message", color: "warning", btn1: "skip", btn2: "open", class: "" },
	{ id: 4, class1: svg4, text1: "Danger Alert", text2: "Danger alert to show the danger message", color: "danger", btn1: "close", btn2: "continue", class: "" },
];

const Asvg = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>

const Asvg1 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>

const Asvg2 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>

const Asvg3 = <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g>
</g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>

export const Svgalert = [
	{ id: 1, class1: Asvg, text1: "Information Alert", text2: "Information alert to show to information", color: "primary", btn1: "cancel", btn2: "open", class: "secondary" },
	{ id: 2, class1: Asvg1, text1: "Success Alert", text2: "Success alert to show to success message", color: "success", btn1: "cancel", btn2: "open", class: "danger" },
	{ id: 3, class1: Asvg2, text1: "Warning Alert", text2: "Warning alert to show warning message", color: "warning", btn1: "cancel", btn2: "open", class: "dark" },
	{ id: 4, class1: Asvg3, text1: "Danger Alert", text2: "Danger alert to show the danger message", color: "danger", btn1: "cancel", btn2: "open", class: "info" },
];
interface alert10 {
	id: number
	class: string
	text1: string
	text2: string
	text3: string
}
export const Additionalcontentalerts: alert10[] = [
	{ id: 1, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary" },
	{ id: 2, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary1" },
	{ id: 3, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary2" },
	{ id: 4, text1: "Thank you for reporting this.", text2: "We appreciate you to let us know the bug in the template and for warning us about future consequences ", text3: "Visit for support for queries ?", class: "primary3" }
];
