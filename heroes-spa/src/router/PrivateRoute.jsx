import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search} = useLocation();
    
    //We can also use a useMemo or a useEffect
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    

  return (logged)
    ? children
    : <Navigate to="/login" />
}
