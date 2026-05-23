/**
 * Generador de Ejercicios
 * Genera ejercicios aleatorios por tema
 */

/**
 * Generar ejercicios de DIVISIONES
 */
export const generarEjerciciosDivisiones = (cantidad = 10, dificultad = 'fácil') => {
  const ejercicios = [];

  for (let i = 0; i < cantidad; i++) {
    let dividendo, divisor, resultado;

    if (dificultad === 'fácil') {
      divisor = Math.floor(Math.random() * 10) + 1; // 1 - 10
      resultado = Math.floor(Math.random() * 10) + 1; // 1 - 10
      dividendo = divisor * resultado;
    } else if (dificultad === 'medio') {
      divisor = Math.floor(Math.random() * 12) + 1; // 1 - 12
      resultado = Math.floor(Math.random() * 10) + 1; // 1 - 10
      dividendo = divisor * resultado;
    } else if (dificultad === 'difícil') {
      divisor = Math.floor(Math.random() * 15) + 2; // 2 - 15
      resultado = Math.floor(Math.random() * 10) + 2; // 2 - 10
      dividendo = divisor * resultado;
    }

    const opciones = [resultado];
    // Generar opciones incorrectas
    for (let j = 0; j < 3; j++) {
      let opcion = Math.floor(Math.random() * 15) + 1;
      while (opciones.includes(opcion)) {
        opcion = Math.floor(Math.random() * 15) + 1;
      }
      opciones.push(opcion);
    }

    // Mezclar opciones
    const opcionesBarajadas = opciones.sort(() => Math.random() - 0.5);

    ejercicios.push({
      tema: 'Divisiones',
      pregunta: `¿Cuál es el resultado de ${dividendo} ÷ ${divisor}?`,
      opciones: opcionesBarajadas,
      respuestaCorrecta: resultado,
      dificultad,
      puntos: dificultad === 'fácil' ? 10 : dificultad === 'medio' ? 15 : 20,
    });
  }

  return ejercicios;
};

/**
 * Generar ejercicios de RAÍZ CUADRADA
 */
export const generarEjerciciosRaizCuadrada = (cantidad = 10, dificultad = 'fácil') => {
  const ejercicios = [];
  const cuadradosPerfectos = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225];

  for (let i = 0; i < cantidad; i++) {
    let numero, resultado;

    if (dificultad === 'fácil') {
      const idx = Math.floor(Math.random() * 7); // 0 - 6
      numero = cuadradosPerfectos[idx];
      resultado = Math.sqrt(numero);
    } else if (dificultad === 'medio') {
      const idx = Math.floor(Math.random() * 11); // 0 - 10
      numero = cuadradosPerfectos[idx];
      resultado = Math.sqrt(numero);
    } else if (dificultad === 'difícil') {
      const idx = Math.floor(Math.random() * cuadradosPerfectos.length);
      numero = cuadradosPerfectos[idx];
      resultado = Math.sqrt(numero);
    }

    const opciones = [resultado];
    // Generar opciones incorrectas
    for (let j = 0; j < 3; j++) {
      let opcion = Math.floor(Math.random() * 20) + 1;
      while (opciones.includes(opcion)) {
        opcion = Math.floor(Math.random() * 20) + 1;
      }
      opciones.push(opcion);
    }

    const opcionesBarajadas = opciones.sort(() => Math.random() - 0.5);

    ejercicios.push({
      tema: 'Raíz Cuadrada',
      pregunta: `¿Cuál es la raíz cuadrada de ${numero}?`,
      opciones: opcionesBarajadas,
      respuestaCorrecta: resultado,
      dificultad,
      puntos: dificultad === 'fácil' ? 10 : dificultad === 'medio' ? 15 : 20,
    });
  }

  return ejercicios;
};

/**
 * Generar ejercicios de MULTIPLICACIONES
 */
export const generarEjerciciosMultiplicaciones = (cantidad = 10, dificultad = 'fácil') => {
  const ejercicios = [];

  for (let i = 0; i < cantidad; i++) {
    let num1, num2, resultado;

    if (dificultad === 'fácil') {
      num1 = Math.floor(Math.random() * 10) + 1; // 1 - 10
      num2 = Math.floor(Math.random() * 10) + 1; // 1 - 10
    } else if (dificultad === 'medio') {
      num1 = Math.floor(Math.random() * 12) + 1; // 1 - 12
      num2 = Math.floor(Math.random() * 12) + 1; // 1 - 12
    } else if (dificultad === 'difícil') {
      num1 = Math.floor(Math.random() * 20) + 10; // 10 - 30
      num2 = Math.floor(Math.random() * 20) + 1; // 1 - 20
    }

    resultado = num1 * num2;

    const opciones = [resultado];
    // Generar opciones incorrectas
    for (let j = 0; j < 3; j++) {
      let opcion = resultado + (Math.floor(Math.random() * 20) - 10);
      while (opciones.includes(opcion) || opcion < 0) {
        opcion = resultado + (Math.floor(Math.random() * 20) - 10);
      }
      opciones.push(opcion);
    }

    const opcionesBarajadas = opciones.sort(() => Math.random() - 0.5);

    ejercicios.push({
      tema: 'Multiplicaciones',
      pregunta: `¿Cuál es el resultado de ${num1} × ${num2}?`,
      opciones: opcionesBarajadas,
      respuestaCorrecta: resultado,
      dificultad,
      puntos: dificultad === 'fácil' ? 10 : dificultad === 'medio' ? 15 : 20,
    });
  }

  return ejercicios;
};

/**
 * Función principal para generar ejercicios
 */
export const generarEjercicios = (tema, cantidad = 10, dificultad = 'fácil') => {
  switch (tema) {
    case 'Divisiones':
      return generarEjerciciosDivisiones(cantidad, dificultad);
    case 'Raíz Cuadrada':
      return generarEjerciciosRaizCuadrada(cantidad, dificultad);
    case 'Multiplicaciones':
      return generarEjerciciosMultiplicaciones(cantidad, dificultad);
    default:
      return [];
  }
};
