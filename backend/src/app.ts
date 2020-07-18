import express from "express";
import cors from "cors";
import mongoose from "mongoose";
var morgan = require("morgan");

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect(`mongodb://127.0.0.1:27017/3lmInfo`, {
      useNewUrlParser: true,
    });
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
