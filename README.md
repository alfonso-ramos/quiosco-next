# Quiosco Next.js

Sistema de gestión de quiosco desarrollado con Next.js, TypeScript y Prisma.

## Descripción General

Aplicación web moderna para la gestión de pedidos y productos en un quiosco o cafetería. Permite a los usuarios visualizar productos por categorías, gestionar órdenes y administrar el catálogo desde una interfaz intuitiva.

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

## Flujo de Trabajo

1. Clona el repositorio y configura las variables de entorno.
2. Instala las dependencias.
3. Realiza las migraciones y genera el cliente de Prisma.
4. (Opcional) Pobla la base de datos con datos de ejemplo (seed).
5. Ejecuta el proyecto en modo desarrollo o producción.
6. (Opcional) Visualiza y administra la base de datos con Prisma Studio.

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

### Poblar la base de datos con datos de ejemplo (seed)

Para insertar los datos de ejemplo definidos en `prisma/seed.ts`, ejecuta:

```bash
npx prisma db seed
```

### Para visualizar tu base de datos con prisma

```bash
npx prisma studio
# Solo para entornso de desarrollo
```

## Docker

Para ejecutar el proyecto con Docker:

```bash
docker compose up --build -d
```

## Tecnologías Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Prisma ORM
- **Contenedorización**: Docker
- **Validación de Código**: ESLint

## Roles y Funcionalidades

- **Usuario**: Puede navegar por categorías, ver productos y realizar pedidos.
- **Administrador**: Accede a paneles exclusivos para gestionar productos, categorías y órdenes.

## Buenas Prácticas

- Uso de TypeScript para evitar errores comunes y mejorar la mantenibilidad.
- Separación clara de componentes y lógica de negocio.
- Migraciones controladas y reproducibles con Prisma.
- Estilos centralizados y personalizables con Tailwind CSS.
- Soporte para despliegue en contenedores Docker.
