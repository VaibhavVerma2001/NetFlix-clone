import AuthReducer from "./AuthReducer";
import { createContext,useReducer,useEffect } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // to store user in localStorage 
    useEffect(()=>{
      localStorage.setItem("user",JSON.stringify(state.user)); //bec user of obj now
      // console.log("local storage user is :", localStorage.getItem("user"));
    },[state.user])

    return (
        <AuthContext.Provider
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
}