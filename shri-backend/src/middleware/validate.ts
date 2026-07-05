import type { Request, Response, NextFunction } from "express";
import { type ZodObject, type ZodRawShape, ZodError } from "zod";

export const validate = (schema: ZodObject<ZodRawShape>) => 
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          errors: error.issues.map(err => ({
            path: err.path,
            message: err.message
          }))
        });
        return;
      }
      next(error);
    }
  };
