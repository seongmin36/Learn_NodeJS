import dotenv from "dotenv";
import express from "express";
import indexRouter from "./routes/index.route.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { timerMiddleware } from "./middlewares/timer.middleware.js";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 전역 미들웨어
app.use(loggerMiddleware);
app.use(timerMiddleware);

// 라우터
app.use("/", indexRouter);

// 404 처리
app.use(notFoundMiddleware);

// 에러 처리
app.use(errorMiddleware);
