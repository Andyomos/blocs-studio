import express from "express";
import { homePage, portfolioPage } from "../controllers/homeRoutes.js";

const homeRoute = express.Router();

homeRoute.get('/', homePage);
homeRoute.get('/portfolio', portfolioPage);



export default homeRoute;