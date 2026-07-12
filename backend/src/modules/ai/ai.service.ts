import { GoogleGenAI } from "@google/genai";
import { env } from "../../config/env";
import {
  GenerateContentOptions,
  GenerateContentResponse,
} from "./ai.types";
import { buildFinancePrompt } from "../prompts/finance.prompt";

class AIService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: env.GEMINI_API_KEY,
    });
  }

  async generateContent(
    options: GenerateContentOptions
  ): Promise<GenerateContentResponse> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: buildFinancePrompt(options.prompt),
    });

    return {
      text: response.text ?? "",
    };
  }
}

export const aiService = new AIService();