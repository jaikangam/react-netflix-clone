import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from "./context/AuthContext";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Acocunt from './pages/Acocunt';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account' element={ <Acocunt/>} /> 
      </Routes>
    </AuthContextProvider>
      
    </>
  );
}

export default App;
