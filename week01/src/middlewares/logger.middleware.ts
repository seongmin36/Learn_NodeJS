import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  console.log(`[Logger] ${req.method} ${req.originalUrl}`);
  next();
};
