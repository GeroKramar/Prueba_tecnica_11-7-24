import express from "express";
import router from "./router/indexRouter";
import morgan from "morgan";
import cors from "cors"

const server = express();
server.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
server.use(morgan('dev'))
server.use(express.json())
server.use(router)

export default server;
