export interface IModal {
	isOpen: boolean,
	title: string,
	titleColor?: string,
	emoji?: string,
	content?: string,
	description?: string,
	hasInput: boolean,
	inputDescription?: string,
	button: string
}