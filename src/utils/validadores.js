/**
 * Validadores
 * Funciones para validar respuestas
 */

/**
 * Validar respuesta de ejercicio
 */
export const validarRespuesta = (respuestaUsuario, respuestaCorrecta) => {
  return respuestaUsuario === respuestaCorrecta;
};

/**
 * Validar email
 */
export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validar contraseña
 */
export const validarContrasena = (contrasena) => {
  // Mínimo 6 caracteres
  return contrasena && contrasena.length >= 6;
};

/**
 * Validar nombre
 */
export const validarNombre = (nombre) => {
  return nombre && nombre.trim().length >= 3;
};

/**
 * Validar formulario de registro
 */
export const validarFormularioRegistro = (email, password, nombre) => {
  const errores = {};

  if (!validarEmail(email)) {
    errores.email = 'Email inválido';
  }

  if (!validarContrasena(password)) {
    errores.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  if (!validarNombre(nombre)) {
    errores.nombre = 'El nombre debe tener al menos 3 caracteres';
  }

  return {
    valido: Object.keys(errores).length === 0,
    errores,
  };
};

/**
 * Validar formulario de login
 */
export const validarFormularioLogin = (email, password) => {
  const errores = {};

  if (!validarEmail(email)) {
    errores.email = 'Email inválido';
  }

  if (!password) {
    errores.password = 'La contraseña es requerida';
  }

  return {
    valido: Object.keys(errores).length === 0,
    errores,
  };
};
