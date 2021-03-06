
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About> }></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes> 
    <Footer></Footer>
    </div>
  );
}

export default App;
