import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/layout/MainMenu/MainManu';
import Login from './components/pages/Login/Login';
import Logout from './components/pages/Logout/Logout';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
