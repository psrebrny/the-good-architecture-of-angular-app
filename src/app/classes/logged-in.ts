export class LoggedIn {
    constructor() {}

    static isLoggedIn(): boolean {
        return JSON.parse(localStorage.getItem('loggedIn'));
    }
}
