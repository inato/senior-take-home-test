import express, { Express, Response } from "express";

const app: Express = express();
const port = 8080;

app.get("/ping", (_req, res: Response) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
