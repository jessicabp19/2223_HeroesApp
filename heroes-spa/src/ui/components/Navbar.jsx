import { useContext, useReducer } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext, authReducer } from '../../auth/context';

export const Navbar = () => {

    
    const { user, logout } = useContext( AuthContext );
    // user?.name -> To check if user exists before trying to get the name
    
    //Usualmente almacenamos tokens de acceso el cual verificamos cuando se ingresa por primera vez
    //Podemos enviarlo por cookies o almacenarlo en el storage y hacer una peticion, etc.

    const navigate = useNavigate(); //Custom hook

    const onLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' } ` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        { user?.name }
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}