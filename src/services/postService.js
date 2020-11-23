import httpService from "./httpService";
import authService from "./authService";

const postAPIEndpoint = "posts";

const uploadPost = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/post`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.post(url, {
        title: data.title,
        description: data.description,
    }).then(res => {
        return {
            status: res.status,
            post: res.data,
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

const getPostById = (postId) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/post/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        return {
            status: res.status,
            post: res.data,
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

const getPost = (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/post`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {
        skip: data.skip,
        limit: data.limit,
        usertype: data.usertype,
    }).then(res => {
        return {
            status: res.status,
            posts: res.data,
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

const editPost = (postId, data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/post/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, {
        title: data.title,
        description: data.description,
    }).then(res => {
        return {
            status: res.status,
            post: res.data,
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

const deletePost = (postId) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/post/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.delete(url, {}).then(res => {
        return {
            status: res.status,
            post: res.data,
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

const updatePostImage = (postId, image) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/image/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, {
        postImage: image,
    }).then(res => {
        return {
            status: res.status,
            postImage: res.data.postImage,
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

const getPostImage = (postId) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/image/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.get(url, {}).then(res => {
        return {
            status: res.status,
            postImage: res.data.postImage,
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

const deletePostImage = (postId) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/image/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.delete(url, {}).then(res => {
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

const updatePostReact = (postId, data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${postAPIEndpoint}/react/${postId}`;

    httpService.setJWT(authService.getJWT());
    const response = httpService.patch(url, {
        loveReact: data.loveReact,
        likeReact: data.likeReact,
        dislikeReact: data.dislikeReact,
    }).then(res => {
        return {
            status: res.status,
            post: res.data,
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
    uploadPost,
    getPostById,
    getPost,
    editPost,
    deletePost,
    updatePostImage,
    getPostImage,
    deletePostImage,
    updatePostReact,
};

export default userService;