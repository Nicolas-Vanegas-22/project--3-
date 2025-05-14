import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';

import AuthPage from './components/Auth/AuthPage';
import TuristaIndex from './components/Turista/TuristaIndex';
import VendedorIndex from './components/Vendedor/VendedorIndex';
import Villavieja from './Municipios/Villavieja'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    
    if (token && role) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  const handleLoginSuccess = ({ token, role }) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  if (!isAuthenticated) {
    return <AuthPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">
              {userRole === 'turista' ? 'Modo Turista' : 'Modo Vendedor'}
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </header>

        <main>
          <Routes>
            {userRole === 'turista' && (
              <>
                <Route path="/" element={<TuristaIndex />} />
                <Route path="/villavieja" element={<Villavieja />} />
              </>
            )}
            {userRole === 'vendedor' && (
              <Route path="/" element={<VendedorIndex />} />
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
