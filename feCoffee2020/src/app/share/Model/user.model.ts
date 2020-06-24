export interface User{
	id: any,
	email: any | undefined;
	authToken: any;
	idToken: any | undefined;
	name: string;
	photoUrl: string;
	provider: string;
}