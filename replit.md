# Ben Kelley Portfolio Site

## Overview

This is a modern, full-stack portfolio website built for Ben Kelley, showcasing his work as a Product Manager in the AI space. The application features a synthwave/retrowave aesthetic with animated backgrounds and neon styling. It's built as a monorepo with both client and server components, designed for easy deployment and scalability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/UI component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theme management and synthwave aesthetic
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API handling
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Storage**: Pluggable storage interface with in-memory implementation for development and PostgreSQL support via Drizzle ORM for production
- **Development**: Vite integration for seamless full-stack development experience

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server
- **Migration**: Drizzle Kit for database migrations and schema management
- **Database**: PostgreSQL as the target production database (configured via DATABASE_URL)

### Development Workflow
- **Monorepo Structure**: Organized into `client/`, `server/`, and `shared/` directories
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Development Server**: Integrated development experience with HMR and API proxying
- **Build Process**: Separate build steps for client (Vite) and server (esbuild) with production optimization

### Styling System
- **Design System**: Custom synthwave/retrowave theme with neon colors and animations
- **CSS Architecture**: Tailwind CSS with extensive customization via CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design
- **Component Styling**: Shadcn/UI components with consistent design tokens

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **express**: Web application framework for Node.js
- **wouter**: Minimalist routing library for React
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver

### UI and Styling Dependencies
- **@radix-ui/***: Headless UI component primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Utility for constructing className strings

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@vitejs/plugin-react**: React support for Vite
- **drizzle-kit**: Database migration and introspection tools
- **tsx**: TypeScript execution environment for Node.js

### Build and Deployment
- **esbuild**: Fast JavaScript bundler for server-side code
- **postcss**: CSS transformation and optimization
- **autoprefixer**: CSS vendor prefixing

The application is designed with a clear separation of concerns, featuring a pluggable storage layer that can scale from development (in-memory) to production (PostgreSQL) environments. The shared schema approach ensures type consistency across the entire stack.