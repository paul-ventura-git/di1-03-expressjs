// npm install cors

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const messages = require('./myData');

app.use(bodyParser.json());
app.use(cors());

// GET request - Retrieve all messages
app.get('/msg', (req, res) => {
    res.json(messages);
});

// POST request - Create a new messages
app.post('/msg', (req, res) => {
    const newMessage = {
        id: messages.length + 1,
        content: req.body.content,
        sender: req.body.sender,
        dateTime: new Date().toISOString()
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// PUT request - Update an existing post
app.put('/msg/:id', (req, res) => {
    const message =
        messages.find(
            item => item.id === parseInt(req.params.id)
        );
    if (!message) return res.status(404).send('This message was not found.');

    message.content = req.body.content;
    message.sender = req.body.sender;
    message.dateTime = new Date().toISOString();
    res.json(message);
});

// DELETE request - Delete a post
app.delete('/msg/:id', (req, res) => {
  /*
    messages = messages
        .filter(item => item.id !== parseInt(req.params.id));    
    res.status(204).send();
    */
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});