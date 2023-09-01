import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/layout/MainMenu/MainManu';
import Login from './components/pages/Login/Login';
import Logout from './components/pages/Logout/Logout';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
