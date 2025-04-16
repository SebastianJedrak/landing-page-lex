import "./Navbar.scss";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav>
      <span>Startup 3</span>
      <ul>
        <NavItem label="Overview" />
        <NavItem label="Prices" />
        <NavItem label="Blog" />
        <NavItem label="Feedback" />
        <li>
          <button>Purchase</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
