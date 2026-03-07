import type { Request, Response, NextFunction } from "express";

// 어떤 요청이 들어왔는지 출력
// req -> logger -> 다음 미들웨어 흐름 확인용
export const loggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  console.log(`[Logger] ${req.method} ${req.originalUrl}`);
  next();
};
