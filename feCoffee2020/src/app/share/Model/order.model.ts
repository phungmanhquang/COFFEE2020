
export interface Order{
	username: string;
	userId: string
	accountName: string;
	address: string;
	note?: string;
	listProduct?: Item[];
	totalprice: number;
	orderTime?: timestamp;
	endTime?: Date | timestamp;
	status?: statusOder;
	reason?: string;
}
export interface Item{
	idItem: string;
	nameItem: string;
	quantity?: number;
	img: string;
	price: number
}
interface timestamp {
	nanoseconds: number,
	seconds: number
}
type statusOder = 'waitting' | 'doing' | 'done' | 'cancel'