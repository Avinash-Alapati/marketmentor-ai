import {
  ChatRequestDto,
  ChatResponseDto,
} from "./chat.types";

export class ChatService {
  async generateResponse(
    payload: ChatRequestDto
  ): Promise<ChatResponseDto> {

    return {
      answer: `You asked: "${payload.message}".
      
This is currently a mock response.

Gemini + RAG will be integrated soon.`,
    };

  }
}

export const chatService = new ChatService();