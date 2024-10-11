import { useState } from "react";
import Layout from "../src/app/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from './components/Auth/AuthContext';
// import PrivateRoute from './components/Routes/PrivateRoutes';
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";

import Dashboard from "./components/Dashboard/Dashboard";
import Profiles from "./components/Customers/Profiles";
import CustomerProfile from "./components/Customers/CustomerProfile";
import PackageList from "./components/Services/PackageList";
import TourTypes from "./components/Services/TourTypes";
import SelectServices from "./components/Services/SelectServices";
import AllAuditors from "./components/Auditors/AllAuditors";
import UpdateProfile from "./components/Auditors/UpdateProfile";
import QuestionList from "./components/Customers/Course/QuestionList";
import CustomerQuestions from "./components/Customers/Course/CustomerQuestions";
import CertificateForm from './components/Certificate/CertificateForm'
import BookFlight from './components/Flight/BookFlight'
import LedgerCustomer from './components/Customers/LedgerCustomer'
import Payable from './components/Amount Information/PayableAmount'
import Branch from './components/Branches/Branch'
import Verification from './components/Verification/Verification'
import CustomerDashboard from "./components/Dashboard/customer/CustomerDashboard";
import ReceivableAmount from "./components/Amount Information/ReceivableAmount";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login users={users}/>} />
        <Route
          path="/signup"
          element={<SignUp setUsers={setUsers} users={users} />}
        />

        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
            <Layout>
              <div className="bg-white w-full">
                <Dashboard />
              </div>
              {/* // </PrivateRoute> */}
            </Layout>
          }
        />
        
        {/* Customers */}
        <Route
          path="/customers"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Profiles />
              </div>
            </Layout>
          }
        />

        {/* Customer dashboard */}
        <Route
          path="/customer-dashboard"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <CustomerDashboard />
              </div>
            </Layout>
          }
        />
       

        <Route path="/customerProfile" element={<CustomerProfile />} />
        

        {/* Auditors */}
        <Route
          path="/vendors"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <AllAuditors />
              </div>
            </Layout>
          }
        />
        {/* Amount */}
        <Route
          path="/amount-payable"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Payable />
              </div>
            </Layout>
          }
        />
        <Route
          path="/amount-receive"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <ReceivableAmount />
              </div>
            </Layout>
          }
        />
        


        <Route
          path="/auditorProfile"   //Only Admin update
          element={ <UpdateProfile />}
        />

        {/* Services */}
        <Route
          path="/tour-type"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-screen">
                <TourTypes />
              </div>
            </Layout>
          }
        />
        <Route
          path="/package-list"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <PackageList />
              </div>
            </Layout>
          }
        />
        <Route
          path="/services-offer"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <SelectServices />
              </div>
            </Layout>
          }
        />
        {/* AddQuestion */}
        <Route path="/book-flight" 
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-[118%]">
                <BookFlight />
              </div>
            </Layout>
          }
        />

        {/* Course */}
        <Route
          path="/course"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <QuestionList />
              </div>
            </Layout>
          }
        />

        {/* Ledger Customer */}
          <Route
          path="/ledger-customer"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <LedgerCustomer />
              </div>
            </Layout>
          }
        />

        {/* Verification */}
        <Route
          path="/verification"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Verification />
              </div>
            </Layout>
          }
        />
  
        <Route
          path="/customer-questions"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <CustomerQuestions />
              </div>
            </Layout>
          }
        />

      {/* Branch */}
      <Route
          path="/branch"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Branch />
              </div>
            </Layout>
          }
        />
      
      
      {/* Certificate */}
      <Route
          path="/certificate"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <CertificateForm />
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
