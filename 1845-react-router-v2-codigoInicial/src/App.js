import './assets/css/base/base.css';
import './assets/css/componentes/card.css'; 
import Home from './pages/Home'; 
import Sobre from './pages/Sobre'; 
import Page404 from './pages/page404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Post from './pages/Post';
function App() {
  // const location = window.location.pathname; 
  // console.log(location);
  // const router = () => {
  //   if (location === '/home') {
  //     return <Home />
  //   }
  //   if (location === '/sobre') {
  //     return <Sobre/>
  //   }
  // }

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element = { <Home/> }/>
        <Route path='/sobre' element = { <Sobre/> }/>
        <Route path='/posts/:id' element = {<Post/>}></Route>
        <Route path='*' element = { <Page404 /> }/>
      </Routes>
    </Router>
  );
}

export default App;
