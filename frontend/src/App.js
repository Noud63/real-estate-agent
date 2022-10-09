import React from 'react';
import Main from './components/Main'
import Header from './components/Header'
import Content from './pages/Content'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Buy from './pages/Buy'
import AllProperties from './pages/AllProperties'
import AllUsersList from './pages/AllUsersList'
import FinanceService from './pages/FinanceService'
import ShowUserInfo from './pages/ShowUserInfo'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
          <Route path='/register' element={<Register />} />
          <Route path='/allproperties' element={<AllProperties />} />
          <Route path='/financeservice' element={<FinanceService />} />
          <Route path='/alluserslist' element={<AllUsersList />} />
          <Route path='/showuserinfo' element={<ShowUserInfo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
