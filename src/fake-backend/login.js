import users from "./users";
const login = (email, password) => {
    return users.find(user => {
        if (email === user.email && password === user.password) {
            return user;
        }
        return null;
    });
};
export default login;
