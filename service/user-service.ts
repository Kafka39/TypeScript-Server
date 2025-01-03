class UserService {
	async registration(name:string): Promise<string> {
		return 'Registering User Service';
	}
}
export default new UserService()