import { Link } from "react-router-dom";

function HeaderNavList({ onItemClick }) {
  return (
    <>
      <li className="py-3 text-center" onClick={onItemClick}>
        <Link to="/">Home</Link>
      </li>
      <li className="py-3 text-center" onClick={onItemClick}>
        <Link to="/about">About</Link>
      </li>
      <li className="py-3 text-center" onClick={onItemClick}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className="py-3 text-center" onClick={onItemClick}>
        <Link to="/signup">Sign Up</Link>
      </li>
    </>
  );
}

export default HeaderNavList;
