import httpService from "./httpService";
import authService from "./authService";

const userAPIEndpoint = "users";

const signup = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/signup`;

    const response = httpService.post(url, {
        fullname: data.fullName,
        username: data.username,
        email: data.emailAddress,
        password: data.password,
    }).then(res => {
        authService.uiLogin(res.data.token);
        return {
            status: res.status,
            user: res.data.user,
        };
    }).catch(error => {
        return {
            status: error.response.status,
            message: "Username or Email address is already taken.",
        };
    });

    return response;
};

const signin = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/signin`;

    const response = httpService.post(url, {
        username: data.username,
        password: data.password,
    }).then(res => {
        authService.uiLogin(res.data.token);
        return {
            status: res.status,
            user: res.data.user,
        };
    }).catch(error => {
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const signout = () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/signout`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        authService.uiLogout();
        return {
            status: res.status,
            user: res.data.user,
        };
    }).catch(error => {
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const getProfile = async (username) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/profile/${username}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        return {
            status: res.status,
            user: res.data,
        };
    }).catch(error => {
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const userService = {
    signup,
    signin,
    signout,
    getProfile,
};

export default userService;