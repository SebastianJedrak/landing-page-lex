import "./NavItem.scss";

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  // For real navigation there should be Link component
  return <li>{label}</li>;
};

export default NavItem;
