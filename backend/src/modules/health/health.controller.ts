import { Request, Response } from "express";
import { healthService } from "./health.service";

class HealthController {
  getHealth(_: Request, res: Response) {
    const response = healthService.getHealthStatus();

    res.status(200).json(response);
  }
}

export const healthController = new HealthController();