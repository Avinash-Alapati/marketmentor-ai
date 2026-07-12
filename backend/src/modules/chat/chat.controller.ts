import { Request, Response } from "express";

import { chatService } from "./chat.service";

import { ApiResponse } from "../../utils/apiResponse";

class ChatController {

  async chat(req: Request, res: Response) {

    const response =
      await chatService.generateResponse(req.body);

    res.status(200).json(
      new ApiResponse(
        true,
        "Chat response generated",
        response
      )
    );

  }

}

export const chatController =
  new ChatController();