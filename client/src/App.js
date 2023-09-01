import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/layout/MainMenu/MainManu';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
