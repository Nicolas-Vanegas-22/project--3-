import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import AuthToggle from './AuthToggle';
import AuthSocialButtons from './AuthSocialButtons';
import AuthRoleSelector from './AuthRoleSelector';
import mockUsers from '../../mock/users';

const AuthPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || null);

  useEffect(() => {
    if (token && userRole) {
      onLoginSuccess({ token, role: userRole });
    }
  }, [token, userRole, onLoginSuccess]);

  const handleAuthSubmit = ({ email, password }) => {
    setError('');
    
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const fakeToken = `fake-jwt-token-${user.id}`;
      setToken(fakeToken);
      localStorage.setItem('token', fakeToken);
      
      if (!user.socialLogin) {
        setShowRoleSelector(true);
      } else {
        localStorage.setItem('userRole', user.role);
        setUserRole(user.role);
        onLoginSuccess({ token: fakeToken, role: user.role });
      }
    } else {
      setError(isLogin 
        ? 'Credenciales incorrectas' 
        : 'El usuario ya existe o los datos son inválidos');
    }
  };

  const handleSocialLogin = (provider) => {
    setError('');
    // Simulación de login social
    setTimeout(() => {
      const randomId = Math.floor(Math.random() * 1000);
      const fakeToken = `fake-jwt-token-social-${randomId}`;
      const role = Math.random() > 0.5 ? 'turista' : 'vendedor';
      
      setToken(fakeToken);
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('userRole', role);
      setUserRole(role);
      
      onLoginSuccess({ token: fakeToken, role });
    }, 500);
  };

  const handleRoleSelect = (role) => {
    setUserRole(role);
    onLoginSuccess({ token, role });
  };

  if (showRoleSelector) {
    return <AuthRoleSelector onSelect={handleRoleSelect} />;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Inicia sesión' : 'Regístrate'}
      </h1>
      
      <AuthForm 
        isLogin={isLogin} 
        onSubmit={handleAuthSubmit} 
        error={error} 
      />
      
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">o</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      //esto sera suspedido debido a que no se tiene
      <AuthSocialButtons
        onGoogle={() => handleSocialLogin('google')}
        onFacebook={() => handleSocialLogin('facebook')}
        onApple={() => handleSocialLogin('apple')}
      />
      
      <AuthToggle 
        isLogin={isLogin} 
        onToggle={() => setIsLogin(!isLogin)} 
      />
    </div>
  );
};

export default AuthPage;