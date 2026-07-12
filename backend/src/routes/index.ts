import { Router } from "express";
import healthRoutes from "../modules/health/health.routes";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to MarketMentor API 🚀",
    version: "v1",
  });
});

router.use("/health", healthRoutes);

export default router;