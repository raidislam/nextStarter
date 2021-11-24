const db = require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get("/property", (req, res) => {
    const sqlGet = "SELECT * FROM property_list";
    db.query(sqlGet, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });









app.get("/", (req, res) => {
    res.send("welcome");
  });

  app.listen(port,()=>{
      console.log('server running', port)
  })