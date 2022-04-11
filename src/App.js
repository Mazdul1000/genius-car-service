
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/about';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes> 
    </div>
  );
}

export default App;
