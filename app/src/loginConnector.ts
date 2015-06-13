/**
 * loginConnector
 */
class loginConnector {
	private _user : string;
	private _password : string;
	private _token : string;
	constructor(user : string, password : string) {
		this._user = user;
		this._password = password;
	}

	private login() {
		console.log('Okie doke');
	}
}