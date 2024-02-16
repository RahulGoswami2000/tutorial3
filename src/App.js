import logo from './logo.svg';
import './App.css';
import Registration from './Pages/Registration';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Profile from './Pages/ProfilePage';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration></Registration>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
