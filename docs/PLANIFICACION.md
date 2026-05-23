# 📋 Planificación - App Matemáticas

## 1️⃣ FASE 1: Configuración Inicial (Semana 1)

### 1.1 Setup del Proyecto
- [ ] Inicializar proyecto React Native
- [ ] Instalar dependencias principales
- [ ] Configurar estructura de carpetas
- [ ] Setup de Git y GitHub

### 1.2 Configuración de Firebase
- [ ] Crear proyecto en Firebase Console
- [ ] Configurar Firestore Database
- [ ] Configurar Authentication
- [ ] Obtener credenciales
- [ ] Conectar Firebase a React Native

### 1.3 Estructura Base
- [ ] Crear carpeta `docs/`
- [ ] Crear carpeta `src/`
- [ ] Configurar navegación básica

---

## 2️⃣ FASE 2: Pantallas Base (Semana 2)

### 2.1 Autenticación
- [ ] Pantalla de Login
- [ ] Pantalla de Registro
- [ ] Pantalla de Perfil
- [ ] Integrar con Firebase Auth

### 2.2 Pantalla Principal (Home)
- [ ] Dashboard del estudiante
- [ ] Mostrar temas disponibles
- [ ] Mostrar progreso general
- [ ] Botón para iniciar ejercicios

### 2.3 Pantalla de Temas
- [ ] Listar todos los temas
- [ ] Mostrar descripción de cada tema
- [ ] Mostrar progreso en cada tema

---

## 3️⃣ FASE 3: Módulo de Ejercicios (Semana 3-4)

### 3.1 Estructura de Ejercicios
- [ ] Crear modelo de datos para ejercicios
- [ ] Crear componente de ejercicio
- [ ] Sistema de preguntas múltiples

### 3.2 Temas Educativos
```
📚 TEMAS A CUBRIR (6to Grado Argentina):

1. DIVISIONES
   - Divisiones simples (10÷2)
   - Divisiones con resultado decimal
   - Divisiones exactas e inexactas
   
2. RAÍZ CUADRADA
   - Raíces simples (√4, √9, √16)
   - Raíces aproximadas
   - Reconocer cuadrados perfectos

3. MULTIPLICACIONES
   - Tablas de multiplicar (refuerzo)
   - Multiplicaciones de 2 dígitos
   - Multiplicaciones por 10, 100, 1000

4. OPERACIONES COMBINADAS
   - Jerarquía de operaciones (PEMDAS/BODMAS)
   - Ejercicios con múltiples operaciones

5. FRACCIONES
   - Fracción simple
   - Simplificación
   - Suma y resta de fracciones

6. PORCENTAJES
   - Calcular porcentaje
   - Descuentos
   - Aumentos
```

### 3.3 Generador de Ejercicios
- [ ] Generar preguntas aleatorias por tema
- [ ] Sistema de dificultad (Fácil, Medio, Difícil)
- [ ] Validar respuestas

---

## 4️⃣ FASE 4: Sistema de Puntuación y Progreso (Semana 5)

### 4.1 Sistema de Puntos
- [ ] Calcular puntos por respuesta correcta
- [ ] Bonus por rapidez
- [ ] Mostrar puntuación en tiempo real

### 4.2 Historial y Estadísticas
- [ ] Guardar resultados en Firestore
- [ ] Mostrar histórico de ejercicios
- [ ] Gráficos de progreso por tema
- [ ] Porcentaje de aciertos

### 4.3 Badges y Logros
- [ ] Crear sistema de insignias
- [ ] Desbloquear logros
- [ ] Mostrar en perfil del usuario

---

## 5️⃣ FASE 5: UI/UX y Pulido (Semana 6)

### 5.1 Diseño Visual
- [ ] Colores atractivos para primaria
- [ ] Fuentes legibles
- [ ] Iconografía amigable
- [ ] Animaciones suaves

### 5.2 Experiencia del Usuario
- [ ] Feedback visual en ejercicios
- [ ] Mensajes de motivación
- [ ] Sonidos (opcional)
- [ ] Pantalla de celebración en logros

---

## 6️⃣ FASE 6: Testing y Deploy (Semana 7)

### 6.1 Testing
- [ ] Pruebas manuales en Android
- [ ] Validar cálculos matemáticos
- [ ] Sincronización con Firebase

### 6.2 Deploy
- [ ] Build APK para Android
- [ ] Publicar en Google Play Store (opcional)
- [ ] Documentar proceso de instalación

---

## 📊 Funcionalidades Clave

| Funcionalidad | Prioridad | Estado |
|---|---|---|
| Autenticación | 🔴 Alta | ⏳ Pendiente |
| Ejercicios básicos | 🔴 Alta | ⏳ Pendiente |
| Sistema de puntos | 🟡 Media | ⏳ Pendiente |
| Historial | 🟡 Media | ⏳ Pendiente |
| Gráficos | 🟢 Baja | ⏳ Pendiente |
| Badges | 🟢 Baja | ⏳ Pendiente |

---

## 🎮 Flujo de Usuarios

```
1. Nuevo usuario
   Login/Registro → Completar Perfil → Home

2. Sesión existente
   Login → Home

3. En Home
   Ver temas → Seleccionar tema → Comenzar ejercicios

4. Ejercicios
   Pregunta → Responder → Validar → Siguiente → Fin

5. Fin de sesión
   Ver puntos → Guardar en nube → Volver a Home
```

---

## 💾 Modelo de Datos Firestore

### Usuarios
```
/users/{userId}
├── email
├── nombre
├── fotoPerfil
├── fechaCreacion
└── totalPuntos
```

### Ejercicios
```
/ejercicios/{ejercicioId}
├── tema
├── pregunta
├── opciones[]
├── respuestaCorrecta
├── dificultad
└── puntos
```

### Progreso del Usuario
```
/progreso/{userId}/temas/{temaId}
├── totalEjercicios
├── ejerciciosCorrectos
├── porcentajeAcierto
├── puntos
└── ultimaActualizacion
```

---

## 🚀 Próximos Pasos
1. ✅ Planificación documentada
2. ⏳ Configurar entorno React Native
3. ⏳ Setup Firebase
4. ⏳ Empezar Fase 1

