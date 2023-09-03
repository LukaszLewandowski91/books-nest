import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const MainMenu = () => {
  const [cookies, setCookies] = useCookies();
  const user = cookies.login;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand>
        <Nav.Link as={Link} to={'/'}>
          Books App
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to={'/'}>
            Home
          </Nav.Link>
          {!user && (
            <Nav.Link as={Link} to={'/login'}>
              Login
            </Nav.Link>
          )}
          {user && (
            <Nav.Link as={Link} to={'/logout'}>
              Logout
            </Nav.Link>
          )}
          {!user && (
            <Nav.Link as={Link} to={'/register'}>
              Sign Up
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainMenu;
