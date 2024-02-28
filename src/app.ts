import * as dotenv from "dotenv";

//inside your starter code, do this

dotenv.config();

import express from "express";
// Set path of node config file (defaul.ts) as it is inside src
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";

import config from "config";

import cors from "cors";
import { router } from "./routes";
import bodyParser from "body-parser";

const port: number = config.get("port");
const host: string = config.get("host");

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(cors);

app.listen(port, async () => {
  console.log(`server listening on port:${port} `);
});
