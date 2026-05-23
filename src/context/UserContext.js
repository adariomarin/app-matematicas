/**
 * User Context
 * Maneja el estado global del usuario
 */

import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../services/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const desuscribirse = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario({
          uid: user.uid,
          email: user.email,
          nombre: user.displayName,
        });
      } else {
        setUsuario(null);
      }
      setCargando(false);
    });

    return desuscribirse;
  }, []);

  const value = {
    usuario,
    cargando,
    error,
    setError,
    setUsuario,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
