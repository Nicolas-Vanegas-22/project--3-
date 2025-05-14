import React from 'react';

const AuthToggle = ({ isLogin, onToggle }) => {
  return (
    <div className="text-center mt-4">
      <p className="text-sm text-gray-600">
        {isLogin ? '¿No tienes una cuenta? ' : '¿Ya tienes una cuenta? '}
        <button
          onClick={onToggle}
          className="font-medium text-black hover:text-gray-800 focus:outline-none"
        >
          {isLogin ? 'Regístrate' : 'Inicia sesión'}
        </button>
      </p>
    </div>
  );
};

export default AuthToggle;