# 🏗️ Arquitectura de la Aplicación

## Diagrama General

```
┌─────────────────────────────────────────┐
│         REACT NATIVE APP (Android)      │
├─────────────────────────────────────────┤
│                                         │
│  ┌────────────────────────────────────┐ │
│  │      PRESENTACIÓN (Screens)        │ │
│  ├────────────────────────────────────┤ │
│  │ • LoginScreen                      │ │
│  │ • HomeScreen                       │ │
│  │ • TemasScreen                      │ │
│  │ • EjerciciosScreen                 │ │
│  │ • ResultadosScreen                 │ │
│  │ • PerfilScreen                     │ │
│  └────────────────────────────────────┘ │
│                  ↓                       │
│  ┌────────────────────────────────────┐ │
│  │   LÓGICA (Services & Utils)        │ │
│  ├────────────────────────────────────┤ │
│  │ • Generador de ejercicios          │ │
│  │ • Validador de respuestas          │ │
│  │ • Calculador de puntos             │ │
│  │ • Autenticación                    │ │
│  └────────────────────────────────────┘ │
│                  ↓                       │
│  ┌────────────────────────────────────┐ │
│  │   COMPONENTES REUTILIZABLES        │ │
│  ├────────────────────────────────────┤ │
│  │ • Pregunta                         │ │
│  │ • Botón Respuesta                  │ │
│  │ • IndicadorProgreso                │ │
│  │ • CardTema                         │ │
│  └────────────────────────────────────┘ │
│                  ↓                       │
│  ┌────────────────────────────────────┐ │
│  │    ESTADO & CONTEXTO               │ │
│  ├────────────────────────────────────┤ │
│  │ • UserContext                      │ │
│  │ • EjerciciosContext                │ │
│  └────────────────────────────────────┘ │
│                  ↓                       │
└──────────────────┬──────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
    ┌───▼────┐         ┌─────▼──────┐
    │ FIREBASE         │  LOCAL      │
    │ -----            │ STORAGE     │
    │ Auth             │ -----       │
    │ Firestore        │ Cache       │
    │ Storage          │             │
    └────────┘         └─────────────┘
```

## Estructura de Carpetas

```
app-matematicas/
│
├── docs/
│   ├── PLANIFICACION.md          # Este archivo
│   ├── ARQUITECTURA.md            # Estructura técnica
│   └── GUIA_INSTALACION.md        # Cómo instalar y ejecutar
│
├── src/
│   ├── screens/                   # Pantallas principales
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── HomeScreen.js
│   │   ├── TemasScreen.js
│   │   ├── EjerciciosScreen.js
│   │   ├── ResultadosScreen.js
│   │   └── PerfilScreen.js
│   │
│   ├── components/                # Componentes reutilizables
│   │   ├── PreguntaCard.js
│   │   ├── RespuestaOpcion.js
│   │   ├── IndicadorProgreso.js
│   │   ├── CardTema.js
│   │   ├── Header.js
│   │   └── Footer.js
│   │
│   ├── services/                  # Servicios (API, Firebase)
│   │   ├── firebaseConfig.js      # Configuración Firebase
│   │   ├── authService.js         # Autenticación
│   │   ├── ejerciciosService.js   # Ejercicios
│   │   └── progresoService.js     # Progreso usuario
│   │
│   ├── utils/                     # Funciones auxiliares
│   │   ├── generadorEjercicios.js # Generar preguntas
│   │   ├── validadores.js         # Validar respuestas
│   │   ├── calculadora.js         # Cálculos de puntos
│   │   └── constantes.js          # Valores constantes
│   │
│   ├── context/                   # Context API
│   │   ├── UserContext.js
│   │   └── EjerciciosContext.js
│   │
│   ├── navigation/                # Navegación
│   │   └── RootNavigator.js
│   │
│   ├── assets/                    # Imágenes y recursos
│   │   ├── images/
│   │   └── fonts/
│   │
│   └── App.js                     # Punto de entrada
│
├── .env.example                   # Variables de entorno
├── package.json                   # Dependencias
├── babel.config.js                # Configuración Babel
├── metro.config.js                # Configuración Metro
└── .gitignore                     # Archivos a ignorar

```

## Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-native": "^0.72.x",
    "react-native-navigation": "^7.x",
    "firebase": "^10.x",
    "@react-native-firebase/app": "^18.x",
    "@react-native-firebase/auth": "^18.x",
    "@react-native-firebase/firestore": "^18.x",
    "react-native-gesture-handler": "^2.x",
    "react-native-reanimated": "^3.x"
  },
  "devDependencies": {
    "@babel/core": "^7.x",
    "jest": "^29.x",
    "react-test-library": "^14.x"
  }
}
```

## Flujo de Datos

### 1. Autenticación
```
Usuario → LoginScreen → authService.login() → Firebase Auth → UserContext → Home
```

### 2. Ejercicios
```
Usuario selecciona tema → generadorEjercicios.generar() → EjerciciosContext → 
EjerciciosScreen → validadores.validar() → actualizarProgreso() → Firestore
```

### 3. Progreso
```
Firestore → progresoService.obtener() → UserContext → HomeScreen (mostrar datos)
```

## Estados Principales

### UserContext
```javascript
{
  usuario: {
    id,
    email,
    nombre,
    fotoPerfil,
    totalPuntos,
    nivelActual
  },
  autenticado: boolean,
  cargando: boolean,
  error: string
}
```

### EjerciciosContext
```javascript
{
  ejercicioActual: {
    id,
    tema,
    pregunta,
    opciones,
    respuestaCorrecta,
    dificultad
  },
  respuestaUsuario: string,
  esCorrecta: boolean,
  puntos: number,
  numeroPregunta: number,
  totalPreguntas: number
}
```

## Variables de Entorno (.env)

```
# Firebase
REACT_APP_FIREBASE_API_KEY=xxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxx
REACT_APP_FIREBASE_PROJECT_ID=xxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxx
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxx
REACT_APP_FIREBASE_APP_ID=xxx

# App
REACT_APP_ENV=development
```

---

**Última actualización:** 23/05/2026

