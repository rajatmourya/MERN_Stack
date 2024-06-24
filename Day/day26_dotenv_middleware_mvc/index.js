const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const mainRouter = require("./routes/index");

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//     console.log(req.method,req.url, new Date().toString());
//     next()
// });

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toString());
  next()
// if(req.body && req.body.name === 'Rajat'){
//     next();
// }else {
//     res.send("Not Allowed");
// }

}); 

app.use("/api", mainRouter);

app.get("/", (req, res) => {
  res.send({
    data: "oK",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`started listening on port: ${PORT}`);
});
