import express from "express";
import { chain } from "../data/blockchain";
export const blockchainRouter = express.Router()
import { Request, Response } from "express";


blockchainRouter.get("/", (_req: Request, res: Response): void => {
    res.json(chain.viewDTO())
})