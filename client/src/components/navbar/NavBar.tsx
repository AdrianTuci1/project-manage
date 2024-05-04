import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import './navBar.scss'

function NavBar() {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    try {
        localStorage.removeItem('isLogedIn');
        window.location.href = '/';
    } catch (error) {
        console.error('Logout error:', error);
    }
  };

  return (
    <nav>
      <div className="content">
      <div className="leftlogo">Manage...</div>
      <div className="center">
        <Link to="/minions"><button className="buton">Minions</button></Link>
        <Link to="/dashboard"><button className="buton">Dashboard</button></Link>
        <Link to="/moneybrr"><button className="buton">Moneybrr</button></Link>
      </div>
      <div className="right">
        <h4>Hi, {user ? user.name : <p>loading</p>}</h4>
        <button className="buton" onClick={handleLogout}>Logout</button>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;