
# Notes App

## Description

This application is a simple notes app with a frontend built using React and a backend using Node.js and MySQL. Users can add, view, and delete notes.

## Instructions

### Frontend

1. Navigate to the frontend directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the frontend:

   ```bash
   npm start
   ```

   Open your browser and go to `http://localhost:3000` to view the application.

### Backend

1. Navigate to the backend directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the backend:

   ```bash
   node index.js
   ```

   The backend server will run on `http://localhost:3001`.

## Functions

### Frontend (React)

- `fetchNotes`: Fetches all notes from the backend and updates the state.
- `addNote`: Adds a new note to the backend and refreshes the notes list.
- `deleteNote`: Deletes a note from the backend and refreshes the notes list.
- `useEffect`: Fetches notes when the component mounts.
- `setNote`: Updates the note state when typing in the textarea.

### Backend (Node.js with Express)

- `POST /addnote`: Adds a new note to the MySQL database.
- `GET /getnotes`: Retrieves all notes from the MySQL database.
- `DELETE /deletenote/:id`: Deletes a specific note from the MySQL database.

## Technologies Used

- React
- Node.js
- Express
- MySQL
- Axios

