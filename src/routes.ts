import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/", (req, res: any) => {
  res.send("No API!");
});

router.get("/healthcheck", (req: Request, res: Response) => {
  // console.log(res.req);
  res.send("Helth is ok!");
});
