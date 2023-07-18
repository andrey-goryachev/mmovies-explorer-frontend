import {Navigate} from 'react-router-dom';
import {paths} from "../../utils/conts";

const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.isLogged ? <Component {...props} /> : <Navigate to={paths.signin} replace={true} />;
};

export default ProtectedRoute;
