import { Request, Response, NextFunction } from "express";

export class AppController {
  public handleError(error: unknown, request: Request, response: Response, next: NextFunction) {
    response.status(500).json({
      success: false,
      error: {
        message: "an error has been occured."
      }
    });
  }

  public handleNotFound(request: Request, response: Response, next: NextFunction) {
    response.status(404).json({
      success: false,
      error: {
        message: "no routes setup, not found."
      }
    });
  }
}
