import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(`[Error Middleware] ${err.message}`);

  const message = err instanceof Error ? err.message : "Internal Server Error";

  res.status(500).json({
    ok: false,
    message,
  });
};
