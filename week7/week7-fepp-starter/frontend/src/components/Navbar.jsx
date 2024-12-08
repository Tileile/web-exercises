import { Link } from 'react-router-dom'
const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const onClickLogout = (e) => {
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1>Job Search</h1>
      </Link>
      <div className="links">
        {isAuthenticated && (
          <div>
            <Link to="/add-job">Add Job</Link>
            <button onClick={onClickLogout}>Logout</button>
          </div>
        )}
        {!isAuthenticated && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;