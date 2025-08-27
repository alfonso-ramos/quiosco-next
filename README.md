# Quiosco Next.js

Sistema de gestión de quiosco desarrollado con Next.js, TypeScript y Prisma.

## Características Principales

- Interfaz de usuario moderna con Next.js 14
- Base de datos con Prisma ORM
- Estilos con Tailwind CSS
- Validación de tipos con TypeScript
- Configuración de entorno con Docker
- Optimización de rendimiento con Next.js

## Estructura del Proyecto

```
quiosco-next/
├── app/              # Páginas y rutas de la aplicación
├── components/       # Componentes reutilizables
├── prisma/          # Esquema y migraciones de la base de datos
├── public/          # Archivos estáticos
└── src/             # Código fuente compartido
```

## Requisitos Previos

- Node.js 18+
- npm o yarn
- Docker y Docker Compose (opcional)

## Instalación

1. Clonar el repositorio
2. Copiar `.env.template` a `.env` y configurar las variables de entorno
3. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

## Desarrollo

### Modo Desarrollo

```bash
npm run dev
# o
yarn dev
```

### Construcción para Producción

```bash
npm run build
# o
yarn build
```

### Ejecutar en Producción

```bash
npm run start
# o
yarn start
```

## Variables de Entorno

Crear un archivo `.env` con las siguientes variables:

```env
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
```

## Base de Datos

El proyecto utiliza Prisma como ORM. Para inicializar la base de datos:

```bash
npx prisma generate
npx prisma migrate dev
```

### Para visualizar tu base de datos con prisma

```bash
npx prisma studio
# Solo para entornso de desarrollo
```

## Docker

Para ejecutar el proyecto con Docker:

```bash
docker-compose up --build
```

## Tecnologías Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Prisma ORM
- **Contenedorización**: Docker
- **Validación de Código**: ESLint
