# MUI Toolpad Core + TanStack Router

A modern React application combining MUI Toolpad Core's admin UI components with TanStack Router's file-based routing system.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching and caching
- **MUI Toolpad Core** - Admin dashboard components
- **Material-UI** - Component library
- **Tailwind CSS** - Utility-first styling
- **Vitest** - Testing framework

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Preview production build
npm run preview
```

The app runs on `http://localhost:3000`

### Docker Setup

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop containers
docker-compose down
```

The containerized app runs on `http://localhost:3000`

**Docker Configuration:**
- Multi-stage build with Node.js 24 Alpine and Nginx 1.27 Alpine
- Production-optimized build served via Nginx
- Port 80 (container) mapped to 3000 (host)

## Project Structure

```
src/
├── routes/              # File-based routes
│   ├── _layout/        # Layout routes
│   │   ├── index.tsx   # Dashboard
│   │   ├── users.tsx   # Users list
│   │   ├── users.$userId.tsx  # User detail
│   │   ├── users.new.tsx      # Create user
│   │   └── orders.tsx  # Orders list
│   └── __root.tsx      # Root layout
├── models/             # Data models and sources
│   ├── users/
│   └── orders/
├── components/         # Reusable components
├── integrations/       # Third-party integrations
└── lib/               # Utilities and configs
```

## Features

### File-Based Routing

Routes are automatically generated from files in `src/routes/`:
- `index.tsx` → `/`
- `users.tsx` → `/users`
- `users.$userId.tsx` → `/users/:userId`
- `users.new.tsx` → `/users/new`

### CRUD Operations

Uses MUI Toolpad Core's CRUD components:
- `List` - Data grid with pagination
- `Show` - Detail view
- `Create` - Form for creating records

### Data Management

- **TanStack Query** for server state
- **DataSource** pattern for CRUD operations
- **DataSourceCache** for optimistic updates

## Key Files

- `vite.config.ts` - Vite and plugin configuration
- `src/main.tsx` - App entry point
- `src/routes/__root.tsx` - Root layout with navigation
- `src/models/` - Data models and API integration
- `Dockerfile` - Multi-stage Docker build configuration
- `docker-compose.yml` - Docker Compose service definition
- `nginx.conf` - Nginx configuration for production

## Development

The TanStack Router plugin automatically generates `routeTree.gen.ts` when the dev server runs. This file should not be edited manually.

## Learn More

- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [MUI Toolpad Core](https://mui.com/toolpad/core/)
- [Material-UI](https://mui.com/material-ui/)
- [Vite](https://vitejs.dev/)
