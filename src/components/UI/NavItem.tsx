import "./NavItem.scss";

interface NavItemProps {
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, active = false }) => {
  // For real navigation there should be a Link component
  return (
    <li className={`nav-item-ui button-middle ${active && "active"}`}>
      {label}
    </li>
  );
};

export default NavItem;
