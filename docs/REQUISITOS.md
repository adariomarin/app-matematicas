# 📖 Especificación de Requisitos

## 1. REQUISITOS FUNCIONALES

### 1.1 Autenticación de Usuarios
- **RF001**: El sistema debe permitir que nuevos usuarios se registren con email y contraseña
- **RF002**: El sistema debe permitir que usuarios registrados inicien sesión
- **RF003**: El sistema debe permitir a usuarios cerrar sesión
- **RF004**: El sistema debe permitir recuperación de contraseña por email
- **RF005**: El usuario debe poder editar su perfil (nombre, foto)

### 1.2 Gestión de Temas Educativos
- **RF010**: El sistema debe mostrar lista de temas disponibles
- **RF011**: El sistema debe permitir seleccionar un tema
- **RF012**: El sistema debe mostrar descripción de cada tema
- **RF013**: El sistema debe mostrar progreso del usuario en cada tema

### 1.3 Generación de Ejercicios
- **RF020**: El sistema debe generar ejercicios aleatorios por tema
- **RF021**: El sistema debe permitir seleccionar nivel de dificultad
- **RF022**: El sistema debe mostrar una pregunta con opciones de respuesta
- **RF023**: El sistema debe permitir al usuario responder preguntas
- **RF024**: El sistema debe validar si la respuesta es correcta

### 1.4 Sistema de Puntuación
- **RF030**: El sistema debe calcular puntos por respuesta correcta
- **RF031**: El sistema debe otorgar bonus por rapidez
- **RF032**: El sistema debe actualizar puntos totales del usuario
- **RF033**: El sistema debe mostrar puntos en tiempo real

### 1.5 Seguimiento de Progreso
- **RF040**: El sistema debe guardar historial de ejercicios resueltos
- **RF041**: El sistema debe calcular porcentaje de aciertos por tema
- **RF042**: El sistema debe mostrar gráficos de progreso
- **RF043**: El sistema debe mostrar estadísticas por tema
- **RF044**: El sistema debe sincronizar progreso en la nube

### 1.6 Logros y Badges
- **RF050**: El sistema debe crear badges por hitos alcanzados
- **RF051**: El sistema debe desbloquear logros automáticamente
- **RF052**: El sistema debe mostrar logros en el perfil
- **RF053**: El sistema debe mostrar notificación al desbloquear logro

---

## 2. REQUISITOS NO FUNCIONALES

### 2.1 Rendimiento
- **RNF001**: La app debe cargar en menos de 3 segundos
- **RNF002**: Las respuestas de validación deben ser instantáneas (< 200ms)
- **RNF003**: La sincronización con Firebase debe ser automática

### 2.2 Disponibilidad
- **RNF004**: La app debe funcionar sin conexión (modo offline)
- **RNF005**: Los datos deben sincronizarse cuando hay conexión

### 2.3 Seguridad
- **RNF006**: Las contraseñas deben estar encriptadas
- **RNF007**: La comunicación con Firebase debe ser segura (HTTPS)
- **RNF008**: Los datos del usuario deben ser privados

### 2.4 Usabilidad
- **RNF009**: La interfaz debe ser intuitiva para niños de 11-12 años
- **RNF010**: Los textos deben ser claros y legibles
- **RNF011**: Los colores deben ser atractivos y estimulantes

### 2.5 Compatibilidad
- **RNF012**: La app debe funcionar en Android 8.0 o superior
- **RNF013**: La app debe ser responsive en diferentes tamaños de pantalla

---

## 3. CASOS DE USO

### CU001: Registrarse
**Actor**: Usuario nuevo
**Precondición**: Usuario tiene email válido
**Flujo Principal**:
1. Usuario ingresa a pantalla de registro
2. Ingresa email, contraseña, nombre y edad
3. Hace clic en "Registrarse"
4. Sistema valida datos
5. Sistema crea cuenta en Firebase
6. Usuario es redirigido a Home
**Postcondición**: Nuevo usuario registrado y autenticado

### CU002: Iniciar Sesión
**Actor**: Usuario registrado
**Precondición**: Usuario tiene credenciales válidas
**Flujo Principal**:
1. Usuario ingresa email y contraseña
2. Hace clic en "Iniciar Sesión"
3. Sistema valida con Firebase
4. Usuario es autenticado
5. Se redirige a Home
**Postcondición**: Usuario autenticado en la app

### CU003: Resolver Ejercicios
**Actor**: Estudiante
**Precondición**: Usuario autenticado
**Flujo Principal**:
1. Usuario selecciona un tema (ej: Divisiones)
2. Sistema genera 10 ejercicios aleatorios
3. Se muestra primera pregunta
4. Usuario elige una opción de respuesta
5. Sistema valida la respuesta
6. Se muestran puntos ganados
7. Se pasa a la siguiente pregunta
8. Después de 10 preguntas, se muestran resultados
9. Progreso se guarda en Firebase
**Postcondición**: Ejercicios completados, progreso actualizado

### CU004: Ver Progreso
**Actor**: Estudiante / Padre
**Precondición**: Usuario autenticado
**Flujo Principal**:
1. Usuario accede a "Mi Progreso"
2. Sistema muestra gráficos por tema
3. Usuario puede ver porcentaje de aciertos
4. Usuario puede ver puntos totales
5. Usuario puede ver historial de ejercicios
**Postcondición**: Información de progreso mostrada

---

## 4. TEMAS Y EJERCICIOS ESPECÍFICOS

### Tema 1: DIVISIONES (Nivel 6to Grado)

**Subtemas**:
- Divisiones simples (hasta 100 ÷ 10)
- Divisiones con decimales
- Problemas con contexto

**Ejemplo de ejercicio**:
```
Pregunta: ¿Cuál es el resultado de 48 ÷ 6?
Opciones:
A) 8 ✓
B) 6
C) 12
D) 4

Puntos: 10 + bonus por rapidez
```

### Tema 2: RAÍZ CUADRADA (Nivel 6to Grado)

**Subtemas**:
- Raíces exactas
- Reconocer cuadrados perfectos
- Aproximación de raíces

**Ejemplo de ejercicio**:
```
Pregunta: ¿Cuál es la raíz cuadrada de 49?
Opciones:
A) 7 ✓
B) 49
C) 21
D) 14

Puntos: 10 + bonus
```

### Tema 3: MULTIPLICACIONES (Repaso)

**Subtemas**:
- Tablas de multiplicar (7 al 9)
- Multiplicación de 2 dígitos
- Propiedades conmutativa y asociativa

### Tema 4: OPERACIONES COMBINADAS

**Subtemas**:
- Jerarquía de operaciones
- Uso de paréntesis
- Resolución paso a paso

### Tema 5: FRACCIONES

**Subtemas**:
- Identificar fracciones
- Simplificación
- Suma y resta

### Tema 6: PORCENTAJES

**Subtemas**:
- Calcular porcentaje
- Descuentos
- Aumentos porcentuales

---

## 5. CRITERIOS DE ACEPTACIÓN

- [ ] Todos los requisitos funcionales implementados
- [ ] App funciona en Android sin crashes
- [ ] Todos los temas tienen al menos 20 ejercicios
- [ ] Sistema de puntuación funciona correctamente
- [ ] Datos se sincronizan con Firebase
- [ ] UI es responsive en móviles
- [ ] 90% de los ejercicios tienen respuestas correctas
- [ ] Tiempo de carga < 3 segundos

---

**Última actualización:** 23/05/2026

