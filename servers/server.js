/** @format */
import http from "http";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import app from "../app.js";

const PORT = process.env.PORT || 8080;
const DB_URL_CONNECTOR = process.env.DB_URL_CONNECTOR;

mongoose.connect(DB_URL_CONNECTOR)
  .then((result) => {
    http.createServer(app).listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
      console.log(`Database connection established: port ${PORT} is connected`);
    });
    
  })
  .catch((err) => { console.log(`Error connecting to database: ${err.message}`); });