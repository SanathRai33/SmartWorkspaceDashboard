# Smart Workspace Dashboard

A responsive and modern workspace management application built with React, designed to help teams organize and track their projects, tasks, and team performance through an intuitive dashboard interface.

## 🚀 Features

- **Team Management**: View team statistics, member counts, and project assignments
- **Project Tracking**: Monitor project progress with visual progress bars and status indicators
- **Task Management**: Kanban-style task board with drag-and-drop functionality
- **Advanced Filtering**: Search, filter by status, and sort tasks by multiple criteria
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Professional loading indicators for better user experience
- **Real-time Updates**: Context-based state management for live task updates

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with React Router 7
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & Material-UI Icons
- **State Management**: React Context API
- **Deployment**: Docker-ready with multi-stage builds

## 📋 Setup Instructions

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanathRai33/SmartWorkspaceDashboard
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Docker Deployment

```bash
# Build the Docker image
docker build -t smart-workspace-dashboard .

# Run the container
docker run -p 3000:3000 smart-workspace-dashboard
```

## 🏗️ Key Architectural Decisions

### 1. **React Router 7 with File-based Routing**
- Chose React Router 7 for its modern approach and built-in SSR capabilities
- File-based routing (`routes.js`) for better organization and developer experience
- Dynamic route parameters (e.g., `team/:teamId`) for flexible navigation

### 2. **Context API for State Management**
- Used React Context API instead of external libraries like Redux for simplicity
- `TaskContext` provides global task state management across components
- Centralized state updates for drag-and-drop functionality

### 3. **Component Architecture**
- Modular component structure with clear separation of concerns
- Reusable UI components (LoadingSpinner, Filter, Header)
- Feature-based organization (components/projects, components/tasks, etc.)

### 4. **Tailwind CSS for Styling**
- Utility-first CSS framework for rapid development
- Consistent design system with responsive breakpoints
- Dark mode support through CSS variables

### 5. **Mock Data with Simulated Loading**
- Static data files for development and demonstration
- Simulated API delays (600-1000ms) to mimic real-world loading times
- Easy transition path to real API integration

## ⚖️ Trade-offs Made

### 1. **Static Data vs. Real API**
- **Decision**: Used static JSON files instead of a backend API
- **Rationale**: Faster development, no server setup required for demo
- **Trade-off**: Limited scalability, no real-time collaboration features
- **Mitigation**: Clean data layer abstraction for easy API integration

### 2. **Context API vs. External State Management**
- **Decision**: React Context API over Redux/Zustand
- **Rationale**: Simpler for this scale, built-in React solution
- **Trade-off**: Potential performance issues with deeply nested contexts
- **Mitigation**: Component memoization and selective re-renders

### 3. **Simulated Loading vs. Real Async Operations**
- **Decision**: setTimeout-based delays instead of actual API calls
- **Rationale**: Demonstrates loading UX without backend complexity
- **Trade-off**: Not representative of real network conditions
- **Mitigation**: Consistent delay patterns across all pages

### 4. **Tailwind CSS vs. Component Libraries**
- **Decision**: Custom Tailwind styles over UI libraries like Material-UI
- **Rationale**: Full design control, smaller bundle size
- **Trade-off**: More development time for complex components
- **Mitigation**: Reusable component patterns and design tokens

## 🔮 What I Would Improve with More Time

### 1. **Backend Integration**
- Implement RESTful API or GraphQL backend
- Add user authentication and authorization
- Real-time updates with WebSockets
- Database integration (MongoDB)

### 2. **Enhanced User Experience**
- Add skeleton loaders instead of spinner-only loading states
- Implement toast notifications for user actions
- Add keyboard shortcuts for power users
- Improve accessibility (ARIA labels, focus management)

### 3. **Advanced Features**
- Task dependencies and Gantt chart views
- Text editing
- Team collaboration features (comments, mentions)
- Advanced reporting and analytics dashboard

### 4. **Performance Optimizations**
- Implement virtual scrolling for large task lists
- Optimize bundle size with code splitting
- Add React Query for advanced caching strategies

### 5. **Testing & Quality**
- Comprehensive unit tests with Jest and React Testing Library
- Integration tests for critical user flows
- Performance monitoring and error tracking

### 6. **Developer Experience**
- Add TypeScript for better type safety
- Implement Storybook for component documentation
- Add ESLint and Prettier for code consistency

### 7. **Scalability & Architecture**
- Micro-frontend architecture for larger teams
- Implement design system with Storybook
- Add internationalization (i18n) support
- Progressive Web App (PWA) features

## 📁 Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Navbar, Filter)
│   │   ├── projects/        # Project-related components
│   │   ├── tasks/           # Task-related components
│   │   ├── teams/           # Team-related components
│   │   └── ui/              # Reusable UI components
│   ├── contexts/            # React Context providers
│   ├── data/                # Static data files
│   ├── routes/              # Page components
│   ├── utils/               # Utility functions
│   ├── app.css              # Global styles
│   ├── root.jsx             # Root component with providers
│   └── routes.js            # Route definitions
├── public/                  # Static assets
├── Dockerfile               # Docker configuration
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md               # This file
```

## 👨‍💻 Author

**Sanath Rai**

- **Email**: [sanathrai03@gmail.com](mailto:sanathrai03@gmail.com)
- **GitHub**: [https://github.com/SanathRai33](https://github.com/SanathRai33)
- **LinkedIn**: [https://www.linkedin.com/in/sanath-rai33/](https://www.linkedin.com/in/sanath-rai33/)
- **Portfolio**: [https://sanathrai33.github.io/Portfolio/](https://sanathrai33.github.io/Portfolio/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
