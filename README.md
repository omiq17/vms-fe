# Vehicle Management System Frontend with React

A React application for managing vehicle fleet.

## Features

- View all vehicles in a sortable table
- Add new vehicles to the fleet
- Track vehicle parameters like speed, battery level, and status
- Monitor vehicle locations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```
git clone https://github.com/yourusername/vehicle-management-system.git
cd vehicle-management-system
```

2. Install dependencies

```
npm install
```

3. Start the mock API

```
npm run mock-api
```

4. Start the development server (in a new terminal)

```
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Get Vehicles List

**Endpoint:** `GET /vehicles`

### Create a New Vehicle

**Endpoint:** `POST /vehicles`

## Project Structure

- `/src`: Application source code
  - `/components`: React components
  - `/contexts`: Context providers for state management
  - `/services`: API services and hooks

## Technologies Used

- React
- Ant Design
- Axios for API calls
- JSON Server for mock API

## Deployment

To build the application for production:

```
npm run build
```

This will create a `build` directory with optimized production files.
