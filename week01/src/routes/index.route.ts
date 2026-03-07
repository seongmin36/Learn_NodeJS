import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    ok: true,
    message: "Welcome to Express + TypeScript",
  });
});

router.get("/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    message: "server is healthy",
  });
});

// next() 실험용
router.get(
  "/next-test",
  (_req, res, next) => {
    console.log("next() 전에 라우터 실행됨");
    next();
  },
  (_req, res) => {
    res.status(200).json({
      ok: true,
      message: "next() 작동하네요",
    });
  },
);

// 에러 미들웨어 실험용
router.get("/error-test", (_req, res, next) => {
  next(new Error("강제 에러 발생"));
});

// next() 안 부르면 왜 멈추는지 테스트
router.get("/hang-test", (_req, _res, _next) => {
  console.log("여기까진 옴");
});

export default router;
