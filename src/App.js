import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Add from './components/Add';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<Add/>}/> 
        <Route path='/navbar' element={<NavBar/>}/> 
       
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
