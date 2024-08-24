const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Devansh@123',
    database: 'notes_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.post('/addnote', (req, res) => {
    const note = req.body.content;
    const query = 'INSERT INTO notes (content) VALUES (?)';
    db.query(query, [note], (err, result) => {
        if (err) throw err;
        res.send('Note added successfully');
    });
});

app.get('/getnotes', (req, res) => {
    const query = 'SELECT * FROM notes';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.delete('/deletenote/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) throw err;
        res.send('Note deleted successfully');
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
