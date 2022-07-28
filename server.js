import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url";
import { dirname } from "path";

import contactRoute from "./routes/contactRoute.js";

dotenv.config();
const app = express();
// const __dirname = path.resolve();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);
app.use(express.static(path.join(__dirname+"/client/build")));
//app.use(express.static(path.serve(__dirname, "./client/build")));
// app.use(express.static("client/build"));
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
);
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (_, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("The server is listening for requests ...🐢")
});