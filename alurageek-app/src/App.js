import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/index'
import Mainroutes from './Routes/Mainroutes';

function App() {
  return (
    <>
      <Navbar/>
      <Mainroutes/>
      <Outlet></Outlet>
    </>
  );
}

export default App;
