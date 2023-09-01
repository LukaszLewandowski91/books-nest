import { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequest,
  loadLoggedUser,
  logIn,
  LOG_IN,
} from '../../../redux/usersRedux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => getRequest(state, LOG_IN));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); // null, loading, success, serverError, clientError
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // setStatus('loading');
    dispatch(loadLoggedUser({ email, password }));
  };

  if (request) {
    console.log(request);
  }
  return (
    <Form className="col-12 col-sm-3 mx-auto" onSubmit={handleSubmit}>
      <h1 className="my-4">Login</h1>

      {request && request.success && (
        <Alert variant="success">
          <Alert.Heading>Success !</Alert.Heading>
          <p>You have been successfully logged in.</p>
        </Alert>
      )}

      {request && request.error && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Unexpected error... Try again</p>
        </Alert>
      )}

      {request && request.pending && (
        <Alert variant="success">
          <Alert.Heading>Success !</Alert.Heading>
          <p>You have been successfully logged in.</p>
        </Alert>
      )}
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter login"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default Login;
