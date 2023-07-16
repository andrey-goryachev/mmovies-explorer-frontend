import { useNavigate } from 'react-router-dom';
import {paths} from "../../utils/conts";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const navigate = useNavigate();
  return (props.isLogged ? <Component {...props} /> : navigate('/signin', { replace: true }));
};

export default ProtectedRoute;
