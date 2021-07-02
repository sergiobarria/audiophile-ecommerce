import { NavLink } from 'react-router-dom';

import { navLinks } from '../../../data/navLinks';
import { Ul } from './NavLinks.styles';

const NavLinks = () => {
  return (
    <Ul>
      {navLinks.map(navLink => (
        <li key={navLink.id}>
          <NavLink to={navLink.url} activeClassName="link-active">
            {navLink.text}
          </NavLink>
        </li>
      ))}
    </Ul>
  );
};

export default NavLinks;
