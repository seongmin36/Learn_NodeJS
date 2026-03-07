import type { Request, Response, NextFunction } from "express";

// 요청 시간을 측정하여 로그에 출력하는 미들웨어
export const timerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = Date.now();

  res.on("finish", () => {
    const end = Date.now();
    const duration = end - start;
    console.log(
      `[TIMER] ${req.originalUrl} - ${duration}ms - status: ${res.statusCode}`,
    );
  });
  next();
};
