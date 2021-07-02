import { NavLink } from 'react-router-dom';

import { navLinks } from '../../../data/nav-links';
import { Ul } from './NavLinks.styles';

const NavLinks: React.FC = () => {
  return (
    <Ul>
      {navLinks.map(navLink => (
        <li key={navLink.id}>
          <NavLink to={navLink.url} activeClassName="link-active" exact>
            {navLink.text}
          </NavLink>
        </li>
      ))}
    </Ul>
  );
};

export default NavLinks;
