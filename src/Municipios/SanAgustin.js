import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SanAgustin = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('guias');

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">


      {/* Título */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        SanAgustin
      </h1>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-6 border-b pb-2">
        <button
          onClick={() => setTab('guias')}
          className={`px-4 py-2 rounded-t-lg font-semibold text-sm sm:text-base ${
            tab === 'guias' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Guías turísticos
        </button>
        <button
          onClick={() => setTab('hoteles')}
          className={`px-4 py-2 rounded-t-lg font-semibold text-sm sm:text-base ${
            tab === 'hoteles' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Hoteles
        </button>
        <button
          onClick={() => setTab('servicios')}
          className={`px-4 py-2 rounded-t-lg font-semibold text-sm sm:text-base ${
            tab === 'servicios' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Prestadores de servicios
        </button>
      </div>

      {/* Contenido del tab */}
      <div className="w-full max-w-3xl mx-auto bg-white shadow rounded-lg p-4 sm:p-6">
        {tab === 'guias' && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-2">Guías Turísticos</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Lista de guías turísticos del Desierto de la Tatacoa.
            </p>
          </div>
        )}
        {tab === 'hoteles' && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-yellow-700 mb-2">Hoteles</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Aquí puedes ver hoteles y hospedajes disponibles en Villavieja.
            </p>
          </div>
        )}
        {tab === 'servicios' && (
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-green-700 mb-2">Prestadores de Servicios</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Transporte, alimentación, fotografía, entre otros.
            </p>
          </div>
        )}
      </div>
      {/* Botón de regreso */}
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base">
        ← Regresar
      </button>
    </div>
  );
};

export default SanAgustin;
