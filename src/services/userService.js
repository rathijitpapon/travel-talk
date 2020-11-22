import httpService from "./httpService";
import authService from "./authService";
const fs = require('fs');

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
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
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
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
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
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const getProfile = (username) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/profile/${username}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        return {
            status: res.status,
            user: res.data,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const editProfile = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/profile/`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, {
        fullname: data.fullName,
        description: data.description,
    }).then(res => {
        return {
            status: res.status,
            user: res.data,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const editPassword = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/password`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, {
        password: data.password,
    }).then(res => {
        return {
            status: res.status,
            user: res.data,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const forgetPassword = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/password/forget/${data.email}`;

    const response = httpService.patch(url, {}).then(res => {
        return {
            status: res.status,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const getEmail = () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/email`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        return {
            status: res.status,
            email: res.data.email,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const updateProfileImage = (image) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/image`;

    const data = new FormData();
    data.append('profileImage', fs.createReadStream(image));

    const config = {
        headers: { 
            ...data.getHeaders(),
        },
        data : data,
    };

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, config).then(res => {
        return {
            status: res.status,
            profileImage: res.data.profileImage,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const getProfileImage = (username) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/image/${username}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        return {
            status: res.status,
            profileImage: res.data.profileImage,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
        return {
            status: error.response.status,
            message: error.response.data.message,
        };
    });

    return response;
};

const updateFollowUser = (username) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${userAPIEndpoint}/follow/${username}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, {}).then(res => {
        return {
            status: res.status,
            user: res.data,
        };
    }).catch(error => {
        if(error.response.status >= 500) {
            return {
                status: error.response.status,
                message: "Unexpected server error.",
            };
        }
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
    editProfile,
    editPassword,
    forgetPassword,
    getEmail,
    updateProfileImage,
    getProfileImage,
    updateFollowUser,
};

export default userService;