import express from "express";
import connectDB from "./config.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world");
});

app.use("/books", booksRoute);

connectDB();
app.listen(PORT, () => {
  console.log(`server is running`);
});
