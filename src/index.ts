import axios from "axios";
import express, { Request, Response } from "express";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/photos", async (req: Request, res: Response) => {
  const limit = req.query._limit;

  const random = Math.floor(Math.random() * 10); //10% chance of happening
  if (random < 1) {
    return res.status(500).send("Internal Server Error");
  }

  if (limit && !isNaN(Number(limit))) {
    const photos = await axios.get(`${process.env.URL}?_limit=${limit}`);
    return res.send(photos.data);
  }

  const photos = await axios.get(`${process.env.URL}`);
  return res.send(photos.data);
});

app.listen(PORT, () => {
  console.log(`----Server listening on port ${PORT}----`);
});
