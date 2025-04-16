import Button from "./Button";
import "./Navbar.scss";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <span>Startup 3</span>
      <ul>
        <NavItem label="Overview" />
        <NavItem label="Prices" />
        <NavItem label="Blog" />
        <NavItem label="Feedback" />
        <li>
          <Button label="Purchase" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
