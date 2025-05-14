import React, { useState } from 'react';

const AuthRoleSelector = ({ onSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
    localStorage.setItem('userRole', role);
    onSelect(role);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center">Selecciona tu rol</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleSelect('turista')}
          className={`p-6 border rounded-lg flex flex-col items-center justify-center transition-colors ${selectedRole === 'turista' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'}`}
        >
          <svg className="w-10 h-10 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="font-medium">Turista</span>
          <p className="text-sm text-gray-500 mt-1 text-center">Explora y descubre nuevos lugares</p>
        </button>
        <button
          onClick={() => handleSelect('vendedor')}
          className={`p-6 border rounded-lg flex flex-col items-center justify-center transition-colors ${selectedRole === 'vendedor' ? 'bg-green-50 border-green-500' : 'hover:bg-gray-50'}`}
        >
          <svg className="w-10 h-10 mb-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="font-medium">Vendedor</span>
          <p className="text-sm text-gray-500 mt-1 text-center">Ofrece servicios o productos</p>
        </button>
      </div>
    </div>
  );
};

export default AuthRoleSelector;