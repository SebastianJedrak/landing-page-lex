import Button from "./Button";
import "./Navbar.scss";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-ui">
      <span className="company-name">Startup 3</span>
      <ul>
        <NavItem label="Overview" active/>
        <NavItem label="Prices" />
        <NavItem label="Blog" />
        <NavItem label="Feedback" />
        <li>
          <Button label="Purchase" variant="tertiary" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
