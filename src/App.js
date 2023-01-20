import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import FarmerProfile from './components/FarmerProfile';
import Cooperative from './Cooperative';
import Farmer from './Farmer';
import Cooperativeprofile from './components/Cooperativeprofile';

function App() {
  return (
    <>
   <div>
    <Router>
   <Navbar/>
   
   <Routes>
   <Route exact path="/" element={<Home active='active'/>}/>
   <Route exact path="/cooperative" element={<Cooperative active='active'/>}/>
   <Route exact path="/farmer" element={<Farmer active='active'/>}/>
     
      
        </Routes>
       <Routes>
        <Route exact path="/register" element={<Register active='active'/>}/>
      <Route exact path="/farmerprofile" element={<FarmerProfile active='active' name='jkj'/>}/>
      <Route exact path="/coopprofile" element={<Cooperativeprofile active='active' name='jkj'/>}/>
      </Routes>
   
        </Router>
       
   </div>
   </>
  );
}

export default App;
