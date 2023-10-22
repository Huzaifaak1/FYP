import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
         
      
      
      </Routes>
  </Router>
  );
}

export default App;
