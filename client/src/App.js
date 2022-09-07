import Payment from './components/payment';
import Registration from './components/registrationform';
import LoginForm from './components/registrationform/Login';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar';
import MedicineList from './components/medicinelist';
import Errorpage from './components/Errorpage';
import AdminForm from './components/adminlogin';
import AdminMedicineList from './components/adminmedicinelist';
import { useContext, useUser } from 'react';
import LoginNavbar from './components/loginnavbar';
import { UserContext } from './contextapi/usercontext';
import PrivateRoute from './privateroutes/privateroute';
import CriticalHospitals from './components/criticalhospitals';
import Criticalreorder from './components/criticalreorder';
import UserNavbar from './components/usernavbar';

function App() {
  // const {auth} = useUser();
const {auth, admin}=useContext(UserContext);
  return (
    <>
    <Router>
      {auth? (admin?<Navbar/>:<UserNavbar/>):<LoginNavbar/>}
      {/* <LoginNavbar/> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/'  element={<Registration/>}/>
        <Route path='/login'  element={<LoginForm/>}/>
        <Route path='/viewmedicine'  element={<PrivateRoute><MedicineList/></PrivateRoute>}/>
        <Route path='/adminlogin'  element={<AdminForm/>}/>
         <Route path="/adminviewmedicine" element={<PrivateRoute><AdminMedicineList/></PrivateRoute>}/>
         <Route path='/payment' element={<Payment/>}/>
        <Route path='*' element={<Errorpage/>} />

        <Route path='/criticalhospitals' element={<CriticalHospitals/>}/>
        <Route path='/criticalhospitals/criticalreorder' element={<Criticalreorder/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;