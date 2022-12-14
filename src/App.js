import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import About from './Pages/Home/About/About';
import Login from './Pages/Shared/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Shared/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequireAuth from './Pages/Shared/Login/RequireAuth/RequireAuth';
import ConfirmTicket from './Pages/CheckOut/ConfirmTicket/ConfirmTicket';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/confirmticket" element={<ConfirmTicket></ConfirmTicket>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
