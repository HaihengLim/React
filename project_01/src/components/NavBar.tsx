import {NavLink} from 'react-router-dom';
import {routes} from '../config/RoutesConfig.tsx';

export default function NavBar() {
  return <nav>
    {routes.map((route) => (
      <NavLink to={route.path}>{route.label}</NavLink>
    ))}
  </nav>
}