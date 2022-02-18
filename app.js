/** @format */
import express from 'express';
import morgan from "morgan";
import homeRoute from './servers/routes/homeRoute.js';

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static("public"));


app.use("/", homeRoute);

app.use((req, res, next) => {
    res.status(404).render("404");
});

export default app;