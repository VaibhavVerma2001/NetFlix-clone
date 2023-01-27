// for example when we go to login page and as we click login button , 3 stages may happen -- starting stage , success stage(if login successfull) , failure stage(wrong credentials or sever error)

export const loginStart = () => ({
    type: "LOGIN_START",
});

// return user if success
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, //send user
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});


//logout
export const logout = () => ({
    type: "LOGOUT",
});