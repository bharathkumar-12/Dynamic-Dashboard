# Dynamic Dashboard

A modern, Apple-inspired dashboard application built with Vue.js and Tailwind CSS.

![screencapture-shimmering-babka-b3fff3-netlify-app-profile-2025-04-05-10_01_50](https://github.com/user-attachments/assets/4cc21729-2804-4eb7-bf7d-6e6e61687117)
![screencapture-shimmering-babka-b3fff3-netlify-app-2025-04-05-10_05_31](https://github.com/user-attachments/assets/4bb40252-bd31-4887-946a-e8b8bd897366)

![screencapture-shimmering-babka-b3fff3-netlify-app-planner-2025-04-05-10_01_24](https://github.com/user-attachments/assets/68dd2180-db0a-463e-b9f5-b1f76a187748)
![screencapture-shimmering-babka-b3fff3-netlify-app-task-2025-04-05-10_01_36](https://github.com/user-attachments/assets/db2d11a5-bbdb-41ab-adff-f075ea7b82de)
![screencapture-shimmering-babka-b3fff3-netlify-app-settings-2025-04-05-10_02_04](https://github.com/user-attachments/assets/fba9467d-3846-4899-b871-7a6f997d650e)
![screencapture-shimmering-babka-b3fff3-netlify-app-2025-04-05-10_02_20](https://github.com/user-attachments/assets/2615256b-3118-4e5c-a673-04b148e5d0d2)



## 🌟 Features

### Modern Apple-Style UI

- Clean, minimalist design with frosted glass effects
- Responsive layout that works on all devices
- Dark mode support
- Smooth animations and transitions
- Consistent typography and spacing

### Dashboard Components

- **Analytics Cards**: Display key metrics with visual indicators
- **Interactive Charts**: Data visualization with Chart.js
- **Task Management**: Create, filter, and track tasks
- **Calendar View**: Schedule and manage events
- **Profile Page**: User information and statistics
- **Settings Panel**: Customize application preferences

### Advanced Filtering

- Multi-criteria filtering system
- Real-time search functionality
- Date range selection
- Category and priority filters
- Status indicators

## 🛠️ Technology Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS with custom components
- **State Management**: Pinia
- **Charts**: Chart.js with Vue-Chartjs
- **Icons**: Font Awesome
- **Routing**: Vue Router
- **Build Tool**: Vite

## 📋 Project Structure

```
dashboard/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   │   ├── CardView.vue # Dashboard card component
│   │   ├── FilterMenu.vue # Advanced filtering component
│   │   └── ...
│   ├── stores/          # Pinia stores for state management
│   ├── views/           # Page components
│   │   ├── HomeView.vue # Dashboard home
│   │   ├── TaskView.vue # Task management
│   │   ├── PlannerView.vue # Calendar view
│   │   ├── ProfileView.vue # User profile
│   │   └── SettingsView.vue # Application settings
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/dynamic-dashboard.git
cd dynamic-dashboard
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Build for production

```bash
npm run build
# or
yarn build
```

## 🧩 Component Overview

### CardView

Displays key metrics with visual indicators and benchmark comparisons. Features:

- Dynamic percentage calculation
- Color-coded status indicators
- Interactive hover effects
- Responsive design

### FilterMenu

Advanced filtering system with multiple criteria:

- Date range selection
- Category filtering
- Status filtering
- Priority filtering
- Real-time search

### TaskView

Comprehensive task management interface:

- Task creation and editing
- Status toggling
- Priority indicators
- Due date tracking
- Category organization

### PlannerView

Calendar interface for scheduling and event management:

- Month navigation
- Event indicators
- Event details panel
- Responsive grid layout

### ProfileView

User profile with statistics and information:

- User details
- Activity timeline
- Skills visualization
- Team membership

### SettingsView

Application configuration panel:

- Notification preferences
- Appearance settings
- Privacy controls
- Language and region settings

## 🎨 Design System

The application follows Apple's design principles:

- **Typography**: SF Pro Display font family
- **Colors**: Clean, minimal palette with accent colors
- **Spacing**: Consistent 8px grid system
- **Components**: Rounded corners, subtle shadows, frosted glass effects
- **Interactions**: Smooth transitions and hover states

## 📱 Responsive Design

The dashboard is fully responsive:

- **Mobile**: Optimized for small screens with collapsible sidebar
- **Tablet**: Adjusted layouts for medium-sized screens
- **Desktop**: Full-featured experience with expanded sidebar

## 🔄 State Management

The application uses Pinia for state management:

- Centralized store for application state
- Reactive data handling
- Computed properties for derived state
- Actions for state mutations

## 🔍 Future Enhancements

- User authentication and authorization
- Data persistence with backend integration
- Real-time updates and notifications
- Export functionality for reports
- Additional chart types and visualizations

## 👏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Chart.js for the charting library
- Font Awesome for the icon set
