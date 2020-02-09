import { default as loginRequest } from '../fake-backend/login';
import StorageService from "./StorageService";
const login = (email, password) => {
    const promise = new Promise((resolve, reject) => {
        const user = loginRequest(email, password);
        if (user) {
            resolve(user);
            StorageService.put('user', user);
        } else {
            reject();
        }
    });
    return promise;
};
const logout = () => {
    return StorageService.clear('user');
};
const getUser = () => {
    return StorageService.retrieveObject('user');
};
const isLoggedIn = () => {
    const user = getUser();
    return !!(user && user.token);
};


const AuthenticationService = {
    login,
    logout,
    getUser,
    isLoggedIn
};

export default AuthenticationService;
