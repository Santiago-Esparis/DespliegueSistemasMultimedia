# 🎬 Despliegue de Sistemas Multimedia - UPNA

Proyecto educativo para la asignatura **Despliegue de Sistemas Multimedia** de la UPNa.

---

## 📋 Envergadura del Proyecto

### 🎯 Objetivo General
Desarrollar una aplicación web moderna y responsive para la gestión y visualización de contenido multimedia, aplicando buenas prácticas de desarrollo frontend con tecnologías actuales.

### 🛠️ Stack Tecnológico
- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Compilador JS**: SWC (optimizado y rápido)
- **Linting**: ESLint 10 + TypeScript ESLint
- **Gestor de Paquetes**: npm

### 🎨 Características Principales

#### Interfaz de Usuario
- Diseño responsive y adaptable a dispositivos
- Componentes React reutilizables
- Estilos CSS modernos y mantenibles
- Mejor experiencia de usuario (UX)

#### Funcionalidades de Multimedia
- Reproducción y visualización de contenido multimedia
- Gestión de archivos multimedia (imágenes, videos, audio)
- Interfaz intuitiva para navegación
- Optimización de carga y rendimiento

#### Desarrollo y Despliegue
- Hot Module Replacement (HMR) con Vite
- Build optimizado para producción
- Validación de código con ESLint
- Tipado estático con TypeScript
- Git como control de versiones

### 📁 Estructura del Proyecto
```
DSM_Proyecto_Web/
├── src/
│   ├── components/        # Componentes React reutilizables
│   ├── pages/            # Páginas principales
│   ├── styles/           # Estilos CSS
│   ├── assets/           # Recursos estáticos
│   └── main.tsx          # Punto de entrada
├── public/               # Archivos públicos
├── package.json          # Dependencias del proyecto
├── tsconfig.json         # Configuración TypeScript
├── vite.config.ts        # Configuración Vite
└── eslint.config.js      # Reglas ESLint
```

### 🚀 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript y genera build optimizado |
| `npm run lint` | Valida código con ESLint |
| `npm run preview` | Vista previa del build en local |

### ✅ Requisitos Cumplidos

- ✓ Directorio TypeScript + SWC configurado
- ✓ Proyecto React con Vite
- ✓ ESLint configurado
- ✓ Control de versiones con Git
- ✓ Dependencias optimizadas

### 📝 Notas de Desarrollo
- El proyecto utiliza módulos ES6 (`type: "module"`)
- Configuración de SWC para compilación rápida
- TypeScript strict para mayor seguridad de tipos
- Ready para despliegue en producción