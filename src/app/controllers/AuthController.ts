import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    try {
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.sendStatus(401);
      }

      const token = jwt.sign({ id: user.id }, `${process.env.PRIVATE_KEY}`, {
        expiresIn: '1d',
      });

      return res.json({
        user: {
          id: user.id,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      return res.sendStatus(502);
    }
  }
}

export default new AuthController();
