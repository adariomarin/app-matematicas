# 🚀 Guía de Instalación

## Requisitos Previos

### Sistema Operativo
- **Windows 10+** o **macOS 11+** o **Linux**

### Software Necesario
```bash
1. Node.js (v16 o superior)
   Descargar: https://nodejs.org/

2. npm o yarn
   npm viene incluido con Node.js
   
3. Android Studio (para emulador)
   Descargar: https://developer.android.com/studio

4. Git
   Descargar: https://git-scm.com/
```

### Verificar Instalación
```bash
# Verificar versiones
node --version      # v16.x.x o superior
npm --version       # 7.x.x o superior
git --version       # 2.x.x o superior
```

---

## Paso 1: Clonar el Repositorio

```bash
# Ir a la carpeta donde quieras clonar
cd ~/Documentos

# Clonar el repositorio
git clone https://github.com/adariomarin/app-matematicas.git

# Entrar en la carpeta
cd app-matematicas
```

---

## Paso 2: Instalar Dependencias

```bash
# Instalar React Native CLI globalmente
npm install -g react-native-cli

# Instalar dependencias del proyecto
npm install

# O si prefieres usar yarn
yarn install
```

---

## Paso 3: Configurar Firebase

### 3.1 Crear Proyecto en Firebase

1. Ve a https://console.firebase.google.com/
2. Haz clic en "Crear un proyecto"
3. Nombre del proyecto: `app-matematicas`
4. Acepta los términos y continúa
5. Desactiva Google Analytics (opcional)
6. Crea el proyecto

### 3.2 Obtener Credenciales

1. En la página del proyecto, haz clic en "Agregar app"
2. Selecciona **Web** (ícono `</>`）
3. Nombre de la app: `app-matematicas-web`
4. Copia las credenciales que aparecen
5. Crea un archivo `.env` en la raíz del proyecto

### 3.3 Configurar Variables de Entorno

Crea archivo `.env` en la raíz:

```bash
cp .env.example .env
```

Abre `.env` y completa con tus credenciales de Firebase:

```
REACT_APP_FIREBASE_API_KEY=tu_api_key_aqui
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id_aqui
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id_aqui
REACT_APP_FIREBASE_APP_ID=tu_app_id_aqui
```

### 3.4 Configurar Firebase Authentication

1. Ve a **Build > Authentication** en Firebase Console
2. Haz clic en "Comenzar"
3. Selecciona **Email/Contraseña**
4. Activa "Email/Contraseña"
5. Guarda

### 3.5 Configurar Firestore Database

1. Ve a **Build > Firestore Database**
2. Haz clic en "Crear base de datos"
3. Selecciona región (recomendado: `southamerica-east1`)
4. Comienza en modo de prueba
5. Crea la base de datos

---

## Paso 4: Configurar Android

### 4.1 Descargar SDK de Android

```bash
# La primera vez que ejecutes react-native, configurará todo
# Si necesitas manual:

# Windows
echo %ANDROID_HOME%

# macOS / Linux
echo $ANDROID_HOME

# Si está vacío, abre Android Studio y ve a:
# Tools > SDK Manager > SDK Platforms
# Descarga Android 12 (API 31) o superior
```

### 4.2 Crear Emulador

1. Abre Android Studio
2. Ve a **Tools > Device Manager**
3. Haz clic en **Create Device**
4. Selecciona un dispositivo (Pixel 4 recomendado)
5. Selecciona API 31 o superior
6. Crea el dispositivo

---

## Paso 5: Ejecutar la Aplicación

### Opción A: Con Emulador

```bash
# Terminal 1: Inicia el emulador (desde Android Studio)
# O desde la terminal:
emulator -avd nombre_del_emulador

# Terminal 2: Inicia el Metro Bundler
npm start

# Terminal 3: Instala y ejecuta en el emulador
npm run android
```

### Opción B: En Dispositivo Android Real

```bash
# 1. Conecta tu teléfono Android con USB
# 2. Activa el modo de desarrollador en el teléfono:
#    - Abre Configuración
#    - Ve a Información
#    - Toca "Número de compilación" 7 veces
#    - Regresa y ve a Opciones de desarrollador
#    - Activa "Depuración por USB"

# 3. Verifica que el dispositivo está detectado
adb devices

# 4. Ejecuta
npm start

# En otra terminal
npm run android
```

---

## Paso 6: Verificar que Todo Funciona

```bash
# Debería ver un mensaje como:
✓ App correctamente compilada
✓ Metro bundler iniciado
✓ App corriendo en Android
```

La app se abrirá automáticamente en tu emulador o dispositivo.

---

## Troubleshooting

### Error: "Android SDK no encontrado"
```bash
# Verifica que Android Studio está instalado
# Configura variables de entorno:

# Windows:
setx ANDROID_HOME "C:\Users\TuUsuario\AppData\Local\Android\Sdk"

# macOS/Linux:
export ANDROID_HOME=$HOME/Library/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
```

### Error: "Metro bundler error"
```bash
# Limpia caché
npm start -- --reset-cache

# O
npx react-native start --reset-cache
```

### Error: "Cannot find module 'firebase'"
```bash
# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install
```

### El emulador es muy lento
```bash
# Usa aceleración de hardware:
# En Android Studio > Settings > Emulator > Use native virtualization
```

---

## Comandos Útiles

```bash
# Iniciar metro bundler
npm start

# Construir y correr en Android
npm run android

# Ver logs
npx react-native log-android

# Limpiar todo
npm run clean

# Compilar APK de producción
npm run build:apk
```

---

## ¿Qué sigue?

Una vez que la app esté corriendo:

1. ✅ Prueba el login/registro
2. ✅ Navega por los temas
3. ✅ Intenta resolver ejercicios
4. ✅ Verifica que los datos se guardan

Para desarrollo, consulta `docs/ARQUITECTURA.md` para entender la estructura del código.

---

**Última actualización:** 23/05/2026
**Versión:** 1.0

