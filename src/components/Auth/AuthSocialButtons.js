import React from 'react';

const AuthSocialButtons = ({ onGoogle, onFacebook, onApple }) => {
  return (
    <div className="space-y-4">
      <button
        onClick={onGoogle}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5C13.6167 5 15.1013 5.55333 16.2867 6.47333L19.91 2.86C17.82 0.996667 15.0467 0 12 0C7.46667 0 3.68667 2.96667 1.82 7.04667L5.91333 10.2867C6.76667 7.37 9.17333 5 12 5Z" fill="#EA4335"/>
          <path d="M23.4567 12.2333C23.4567 11.37 23.39 10.5567 23.2667 9.78H12V14.41H18.5733C18.2967 15.9567 17.4467 17.2433 16.1733 18.1067L19.94 21.0633C22.21 19 23.4567 15.9233 23.4567 12.2333Z" fill="#4285F4"/>
          <path d="M5.91333 13.7133C5.68667 13.0433 5.56 12.3267 5.56 11.5867C5.56 10.8467 5.68667 10.13 5.91333 9.46L1.82 6.22C0.996667 8.03667 0.543335 10.0367 0.543335 12.0867C0.543335 14.1367 0.996667 16.1367 1.82 17.9533L5.91333 13.7133Z" fill="#FBBC05"/>
          <path d="M12 24C15.0467 24 17.7167 22.9233 19.94 21.0633L16.1733 18.1067C15.0467 18.9233 13.6167 19.4567 12 19.4567C9.17333 19.4567 6.76667 17.0867 5.91333 14.17L1.82 17.9533C3.68667 22.0333 7.46667 25 12 25Z" fill="#34A853"/>
        </svg>
        Continuar con Google
      </button>
      <button
        onClick={onFacebook}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12Z" fill="white"/>
        </svg>
        Continuar con Facebook
      </button>
      <button
        onClick={onApple}
        className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5C18.617 20.31 18.279 21.24 17.77 21.96C17.26 22.67 16.57 23.5 15.54 23.5C14.56 23.5 14.07 22.81 12.96 22.81C11.86 22.81 11.3 23.5 10.38 23.5C9.35 23.5 8.6 22.58 8.08 21.87C7.2 20.66 6.54 18.77 6.5 16.87C6.47 15.65 6.65 14.44 7.43 13.34C8.07 12.42 9.09 11.85 10.16 11.85C11.18 11.85 11.87 12.5 12.89 12.5C13.89 12.5 14.45 11.85 15.64 11.85C16.62 11.85 17.54 12.33 18.17 13.17C16.17 14.24 16.76 17.15 18.71 19.5ZM13 2.5C13.73 1.63 14.94 1 15.94 1C16.07 2.17 15.6 3.3 14.9 4.16C14.21 5 13.07 5.67 12 5.5C11.88 4.31 12.5 3.24 13 2.5Z" fill="white"/>
        </svg>
        Continuar con Apple
      </button>
    </div>
  );
};

export default AuthSocialButtons;