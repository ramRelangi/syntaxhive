# HRMS Development Environment Setup

This document provides instructions for setting up the development environment for the Human Resource Management System (HRMS) application. The application consists of a ReactJS with TypeScript frontend, a Node.js backend, and a PostgreSQL database.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   **Node.js and npm:** The HRMS uses Node.js for the backend and npm (Node Package Manager) for managing project dependencies.
    -   [Download Node.js](https://nodejs.org/)
    -   Verify installation by running `node -v` and `npm -v` in your terminal.
-   **PostgreSQL:** The application uses PostgreSQL as its database.
    -   [Download PostgreSQL](https://www.postgresql.org/download/)
    -   Verify installation by running `psql --version` in your terminal.

## Setting Up PostgreSQL

1.  **Install PostgreSQL:** Follow the installation instructions for your operating system from the PostgreSQL website.
2.  **Create a Database:** Once installed, create a new database for the HRMS application. You can use the `psql` command-line tool or a GUI tool like pgAdmin.
```
bash
    psql -U postgres
    CREATE DATABASE hrms_dev;
    \q
    
```
3. **Create a User**: If needed, create a user for the hrms database.
```
bash
    CREATE USER hrms_user WITH PASSWORD 'your_password';
    GRANT ALL PRIVILEGES ON DATABASE hrms_dev TO hrms_user;
    
```
## Project Setup

1.  **Clone the Repository:** Clone the HRMS project repository to your local machine.
```
bash
    git clone <repository_url>
    cd <hrms_folder>
    
```
2.  **Install Dependencies:**
    -   **Backend:** Navigate to the backend directory and install the dependencies.
```
bash
        cd backend
        npm install
        
```
-   **Frontend:** Navigate to the frontend directory and install the dependencies.
```
bash
        cd ../frontend
        npm install
        
```
## Environment Variables

The HRMS application uses environment variables for configuration. You need to create `.env` files for both the backend and frontend.

1.  **Backend:**
    -   Create a `.env` file in the `backend` directory.
    -   Add the following variables:
```
        DATABASE_URL=postgresql://hrms_user:your_password@localhost:5432/hrms_dev
        PORT=5000
        JWT_SECRET=your_jwt_secret
        # Add more backend specific variables
        
```
2.  **Frontend:**
    -   Create a `.env` file in the `frontend` directory.
    -   Add the following variables:
```
        REACT_APP_API_BASE_URL=http://localhost:5000
        # Add more frontend specific variables
        
```
## Running the Development Servers

1.  **Backend:**
    -   Navigate to the `backend` directory.
    -   Run the backend development server.
```
bash
        cd backend
        npm run dev
        
```
2.  **Frontend:**
    -   Navigate to the `frontend` directory.
    -   Run the frontend development server.
```
bash
        cd frontend
        npm start
        
```
## Database Setup and Migration

1.  **Database Migrations:**
    -   The HRMS backend uses database migrations to manage database schema changes.
    -   Navigate to the `backend` directory.
    -   Run the following command to set up the database schema:
```
bash
        #command to set up the schema
        
```
-   Run the following command to apply pending migrations:
```
bash
        #command to migrate the database
        
```
- Check the backend documentation for more information.

## User Specific Customization Guidelines

This HRMS application is designed to be customizable to fit different organizational needs. Here are some guidelines for user-specific customization:

1.  **Frontend Customization:**
    -   **UI/UX:** Modify components, styles, and layouts in the `frontend/src` directory to match your desired look and feel.
    -   **Themes:** Create new themes by modifying the CSS variables or creating new CSS files.
    -   **Features:** Add or remove features by modifying React components and routing logic.

2.  **Backend Customization:**
    -   **Business Logic:** Modify controllers and services in the `backend/src` directory to implement custom business logic.
    -   **API Endpoints:** Add, modify, or remove API endpoints in the `backend/src` directory.
    -   **Database Schema:** Modify the database schema in the `backend/src/models` or via migration files to add custom tables and fields.

3.  **Configuration:**
    -   Use environment variables to configure application settings (e.g., API keys, database credentials).
    -   Modify configuration files (e.g., `backend/src/config.js`) to fine-tune application behavior.

4. **Custom Libraries:**
    - For extensive changes, it's recomended to create a separated library or module that can be integrated with the HRMS.

## Additional Notes

-   Ensure that you have set up the correct database credentials and other environment variables before running the application.
-   Refer to the individual frontend and backend README files for more specific information on their respective development environments.
- For extensive changes, consider creating a fork of the project and maintaining your version.

## Contributing

If you encounter any issues or have suggestions for improvements, please create an issue on the project's GitHub repository.