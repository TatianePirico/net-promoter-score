export interface IModal {
	isOpen: boolean,
	title: string,
	titleColor?: string,
	emoji?: string,
	content?: string,
	description?: string,
	hasInput: boolean,
	inputDescription?: string,
	button: string,
	requestResponse: INoteResponse;
}

export interface INoteResponse{
	code: number;
	data: IDataResponse;
	reason: string
}

export interface IDataResponse{
	resposta: boolean; 
	id: string;
}