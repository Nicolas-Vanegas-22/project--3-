import React, { useState } from 'react'; // Asegúrate de tener useState importado
import { useNavigate } from 'react-router-dom';

function App() {
  const [grayMode, setGrayMode] = React.useState(false);

  return (
    <div style={{ filter: grayMode ? 'grayscale(100%)' : 'none' }}>
      <button onClick={() => setGrayMode(!grayMode)}>
        Activar blanco y negro
      </button>
      {/* Resto del contenido */}
    </div>
  );
}

const TuristaIndex = () => {
  const [activeTab, setActiveTab] = useState(''); // Pestaña activa: 'guias', 'hoteles', 'servicios'
  const navigate = useNavigate();
  

  const destinations = [
    {
      id: 1,
      name: 'San Agustín',
      description: 'Parque Arqueológico declarado Patrimonio de la Humanidad.',
      image: '/img/SanAgustin.jpg',
      rating: 5.0
    },
    {
      id: 2,
      name: 'Isnos',
      description: 'Cascadas como el Salto de Bordones y riqueza arqueológica.',
      image: '/img/Isnos.jpg',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Villavieja',
      description: 'Desierto de la Tatacoa y observación astronómica.',
      image: '/img/Villavieja.jpg',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Neiva',
      description: 'Capital del Huila, Festival del Bambuco y Malecón del Río Magdalena.',
      image: '/img/Neiva.jpg',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Pitalito',
      description: 'Región cafetera y acceso a San Agustín.',
      image: '/img/Pitalito.jpg',
      rating: 4.6
    },
    {
      id: 6,
      name: 'La Plata',
      description: 'Senderismo, cascadas y cultura religiosa.',
      image: '/img/LaPlata.jpg',
      rating: 4.5
    },
    {
      id: 7,
      name: 'Gigante',
      description: 'Mano del Gigante y paisajes naturales.',
      image: '/img/Gigante.jpg',
      rating: 4.6
    },
    {
      id: 8,
      name: 'Yaguará',
      description: 'Represa de Betania y turismo acuático.',
      image: '/img/Yaguara.jpg',
      rating: 4.4
    },
    {
      id: 9,
      name: 'Acevedo',
      description: 'Parque Nacional Natural Cueva de los Guácharos.',
      image: '/img/Acevedo.jpg',
      rating: 4.7
    },
    {
      id: 10,
      name: 'Paicol',
      description: 'Deportes extremos y ecoturismo.',
      image: 'img/Paicol.jpg',
      rating: 4.5
    },
    {
      id: 11,
      name: 'Rivera',
      description: 'Aguas termales naturales y exuberante vegetación.',
      image: 'img/Rivera.jpg',  
      rating: 4.8
    },
    // Para agregar más municipios sigue el mismo formato
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Municipios Turísticos del Huila</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900">{destination.name}</h2>
                  <div className="flex items-center bg-blue-10 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{destination.description}</p>
                    <button
                      onClick={() => {
                        if (destination.name === 'Villavieja') {
                          navigate('/villavieja');}
                        else {
                          alert('El módulo que selecciono esta en construcción');
                        } 
                      }}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Ver detalles
                    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuristaIndex;
