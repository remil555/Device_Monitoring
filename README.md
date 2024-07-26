# Device Monitoring API

## Description
This project is an uptime and analytical data monitoring RESTful API server that allows authenticated users to monitor a device and get the device’s detailed uptime reports and analytical data reports.

## Prerequisites
- Node.js
- MongoDB

## Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd device-monitoring-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/device-monitoring
    JWT_SECRET=your_jwt_secret
    ```

4. Generate sample data and insert it into MongoDB:
    ```bash
    node src/data/generateData.js
    ```

5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Analytical Data API
**GET /api/analytical-data**

### Uptime Data API
**GET /api/uptime-data**

### Overall Report API
**GET /api/reports**

## Testing
Run tests using Jest:
```bash
npm test
