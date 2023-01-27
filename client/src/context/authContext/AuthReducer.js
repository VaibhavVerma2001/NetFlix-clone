// take actions and based on actions ,it will update context state

const AuthReducer = (state, action) => {
    //action.type like LOGIN_SUCCESS,LOGIN_FAILURE ETC
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null, //bec starting
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload, //user
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: null, //bec starting
                isFetching: false,
                error: true
            };
        default:
            return { ...state }; //as it is by default
    }
}

export default AuthReducer;