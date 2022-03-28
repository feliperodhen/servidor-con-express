let Contenedor = require("./FelipeRodriguez.js");
const express = require("express");
const app = express();
const PORT = 8080;

let prod = new Contenedor("productos.txt");

app.get("/", (req, res) => {
  res.send(
    "<h1>Holi</h1>"
  );
});

app.get("/productos", (req, res) => {
    prod.getAll().then((response) => {
    res.send(response);
  });
});

app.get("/productoRandom", (req, res) => {
    prod.getById(Math.floor(Math.random() * 3) + 1).then((response) => {
    res.send(response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
