const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  console.log(`req: ${req}, res: ${res}, next: ${next}`);
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server On! http://localhost:${port}`);
});
