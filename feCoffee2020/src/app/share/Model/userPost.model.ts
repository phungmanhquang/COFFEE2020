export interface UserPost{
	id?: any,
	userID: any,
	userName: string,
	provider: string,
	photoUrl: string,
	timeRegister: Date,
	email: string | null
}