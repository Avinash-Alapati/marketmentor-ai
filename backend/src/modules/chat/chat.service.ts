import { aiService } from "../ai/ai.service";
import {
  ChatRequestDto,
  ChatResponseDto,
} from "./chat.types";

export class ChatService {
  async generateResponse(
    payload: ChatRequestDto
  ): Promise<ChatResponseDto> {
    const result =
      await aiService.generateContent({
        prompt: payload.message,
      });

    return {
      answer: result.text,
    };
  }
}

export const chatService = new ChatService();