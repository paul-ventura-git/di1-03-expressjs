const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log(`MiddleWare Accepted`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/test', (req, res) => {
    console.log(req.body);
    res.send("Data Received!")
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(port, () => {
    console.log(`Server Established on Port -> ${port}`);
});