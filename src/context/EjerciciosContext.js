/**
 * Ejercicios Context
 * Maneja el estado de los ejercicios
 */

import React, { createContext, useState } from 'react';

export const EjerciciosContext = createContext();

export const EjerciciosProvider = ({ children }) => {
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestaUsuario, setRespuestaUsuario] = useState(null);
  const [esCorrecta, setEsCorrecta] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [tema, setTema] = useState(null);
  const [dificultad, setDificultad] = useState('fácil');
  const [tiempoInicio, setTiempoInicio] = useState(null);

  const reiniciarEjercicios = () => {
    setEjercicios([]);
    setEjercicioActual(0);
    setRespuestaUsuario(null);
    setEsCorrecta(null);
    setPuntos(0);
    setTema(null);
    setTiempoInicio(null);
  };

  const value = {
    ejercicios,
    setEjercicios,
    ejercicioActual,
    setEjercicioActual,
    respuestaUsuario,
    setRespuestaUsuario,
    esCorrecta,
    setEsCorrecta,
    puntos,
    setPuntos,
    tema,
    setTema,
    dificultad,
    setDificultad,
    tiempoInicio,
    setTiempoInicio,
    reiniciarEjercicios,
  };

  return (
    <EjerciciosContext.Provider value={value}>
      {children}
    </EjerciciosContext.Provider>
  );
};
