// filepath: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Asegúrate de importar los estilos de Tailwind
import { ThemeProvider } from './Context/ThemeContext'; // modo oscuro

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> {/* ← Envolvemos App */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
