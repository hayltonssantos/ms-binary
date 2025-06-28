import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LicenseUserProvider } from './contexts/LicenseUserContext';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RiskDisclosure from './pages/RiskDisclosure';
import CookiePolicy from './pages/CookiePolicy';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Styles
import './styles/main.scss';

function App() {
  return (
    <Router>
      <AuthProvider>
        <LicenseUserProvider>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/risk" element={<RiskDisclosure />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </LicenseUserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
