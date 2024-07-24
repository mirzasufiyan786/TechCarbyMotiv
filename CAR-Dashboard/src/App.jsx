// home is booking
// about is Assets



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout1 from './layout/Layout1';
import Home from './pages/Booking';
import About from './pages/Assets';  
import Dashboard from './pages/Dashboard';
import SellCars from './pages/SellCars';
import Calender from './pages/Calender';
import Services from './pages/Services';
import Messages from './pages/Messages';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProfileSetting from './pages/ProfileSetting';
import SettingPage2 from './pages/SettingPage2'; // Example child page
import Settings from './pages/Settings';
import Passwordsetting from './pages/PasswordSetting';
import EmailSetting from './pages/EmailSetting';
import NotificatioSetting from './pages/NotificationSetting';
import BuyCar from './pages/BuyCar';
import CarDetails from './pages/Cardetails';
import Bookingdetailcars from './pages/Bookingdetailcars';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index  element={<Dashboard />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bookingdetailcars" element={<Bookingdetailcars />} />
          <Route path="sellcars" element={<SellCars />} />
          <Route path="calender" element={<Calender />} />
          <Route path="services" element={<Services />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="buycar" element={<BuyCar />} />
          <Route path="cardetails" element={<CarDetails />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="setting" element={<Settings />}>
            <Route path="profileS" element={<ProfileSetting />} />
            <Route path="page2" element={<SettingPage2 />} />
            <Route path="password" element={<Passwordsetting />} />
            <Route path="email" element={<EmailSetting />} />
            <Route path="notification" element={<NotificatioSetting/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
