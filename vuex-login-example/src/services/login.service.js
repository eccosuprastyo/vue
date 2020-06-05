export const loginService = {
    login
};

function login(username, password) {
    if(username != "" && password != "") {
        return true;
    }
}