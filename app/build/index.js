/// <reference path="../definitions/node.d.ts" />
var menu = require('node-menu');
var loginConnector = (function () {
    function loginConnector(user, password) {
        this._user = user;
        this._password = password;
    }
    loginConnector.prototype.login = function () {
        console.log('Okie doke');
    };
    return loginConnector;
})();
menu.addItem('Login to Salesforce', function (username, password) {
    console.log('Salesforce Username: ' + username);
    console.log('Salesforce Password: ' + password);
    new loginConnector(username, password);
}, null, [
    { 'name': 'Username', 'type': 'string' },
    { 'name': 'Password', 'type': 'string' }
]);
menu.start();
