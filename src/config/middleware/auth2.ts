import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_KEY = '6ddf1580db7e583f8f34092f1d93a652';

export const generateToken = (payload: Record<string, unknown>): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'Token not provided' });
    return;
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authenticateUser;
