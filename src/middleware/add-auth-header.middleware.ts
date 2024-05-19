import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AddAuthHeaderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers['authorization']) {
      req.headers['authorization'] = `Bearer ${process.env.TEST_JWT_TOKEN}`;
    }
    next();
  }
}
