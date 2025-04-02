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

3. Start the backend API (on port 3000)

```
# If using the included JSON Server for testing:
json-server --watch db.json --port 3000
```

4. Start the frontend development server (in a new terminal)

For Mac/Linux:

```
npm start
```

For Windows:

```
npm run start:windows
```

The frontend application will be available at [http://localhost:8000](http://localhost:8000).

## Port Configuration

- Frontend: Running on port 8000
- Backend API: Expected to run on port 3000

To change these ports:

- Frontend port: Modify the PORT value in `.env` and update the start scripts in `package.json`
- Backend API URL: Update the REACT_APP_API_URL in `.env`

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

## Environment Variables

The project uses the following environment variables:

- `REACT_APP_API_URL`: The base URL for API requests (default: http://localhost:3000)
- `PORT`: The port on which the development server runs (default: 8000)

These can be configured in the `.env` file.

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
