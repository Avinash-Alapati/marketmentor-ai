import { Request, Response } from "express";
import { healthService } from "./health.service";
import { ApiResponse } from "../../utils/apiResponse";

class HealthController {
  getHealth(_: Request, res: Response) {
    const health = healthService.getHealthStatus();

    res
      .status(200)
      .json(new ApiResponse(true, "Health check successful", health));
  }
}

export const healthController = new HealthController();