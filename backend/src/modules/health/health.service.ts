export class HealthService {
  getHealthStatus() {
    return {
      success: true,
      status: "OK",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}

export const healthService = new HealthService();