import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
            <Link to="/state">State</Link>
        </div>
    );
}
export default Header;