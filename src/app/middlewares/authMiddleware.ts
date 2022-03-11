import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface Payload {
  id: string;
  iat: number;
  exp: number;
}
export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, `${process.env.PRIVATE_KEY}`);

    const { id } = data as Payload;

    req.userId = id;

    return next();
  } catch {
    return res.sendStatus(401);
  }
}
