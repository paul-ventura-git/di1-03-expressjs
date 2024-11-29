const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Middleware personalizado
app.use((req, res, next) => {
    console.log(`MiddleWare Accepted`);
    next();
});

app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello, World!');
});

app.post('/test', (req, res) => {
    res.status(200);
    console.log(req.body);
    res.send("Data Received!")
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(PORT, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ PORT)
  else
      console.log("Error occurred, server can't start", error);
  }
);