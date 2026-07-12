import { Router } from "express";
import healthRoutes from "../modules/health/health.routes";
import chatRoutes from "../modules/chat/chat.routes";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Welcome to MarketMentor API 🚀",
    version: "v1",
  });
});

router.use("/health", healthRoutes);

router.use("/chat", chatRoutes);

export default router;