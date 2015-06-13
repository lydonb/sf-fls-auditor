/// <reference path="../definitions/node.d.ts" />
var menu = require('node-menu');

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

menu.addItem(
    'Login to Salesforce', 
    function(username, password) {
        console.log('Salesforce Username: ' + username);
        console.log('Salesforce Password: ' + password);
        new loginConnector(username, password);
        
    },
    null,
    [
        {'name': 'Username', 'type': 'string'}, 
        {'name': 'Password', 'type': 'string'}
    ]);
	
	menu.start();