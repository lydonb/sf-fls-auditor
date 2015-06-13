/**
 * loginConnector
 */
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
