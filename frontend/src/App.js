import React  from 'react';
import Main from './components/Main'
import Header from './components/Header'
import Content from './pages/Content'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Buy from './pages/Buy'
import FriendsAndPartners from './pages/FriendsAndPartners';
import AllProperties from './pages/AllProperties'
import AllUsersList from './pages/AllUsersList'
import FinanceService from './pages/FinanceService'
import UserProfile from './pages/UserProfile'
import Payment from './pages/Payment'
import Services from './pages/Services'
import Completion from './pages/Completion'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './utilities/ScrollToTop';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Main />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/services' element={<Services />} />
          <Route path='/friendsandpartners' element={<FriendsAndPartners />} />
          <Route path='/register' element={<Register />} />
          <Route path='/allproperties' element={<AllProperties />} />
          <Route path='/financeservice' element={<FinanceService />} />
          <Route path='/alluserslist' element={<AllUsersList />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/completion' element={<Completion />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
      
    </>
  );
}

export default App;
