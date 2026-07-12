import { env } from "./config/env";
import { connectDatabase } from "./config/database";
import mongoose from "mongoose";
import app from "./app";

const startServer = async () => {
  await connectDatabase();

  const server = app.listen(env.PORT, () => {
    console.log(
      `🚀 Server running at http://localhost:${env.PORT}`
    );
  });

  process.on("SIGINT", async () => {
    console.log("\n🛑 Shutting down server...");

    await mongoose.connection.close();

    server.close(() => {
      console.log("✅ Server stopped");
      process.exit(0);
    });
  });
};

startServer();