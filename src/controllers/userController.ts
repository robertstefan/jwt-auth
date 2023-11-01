import { Request, Response } from 'express';
import { getUser } from '../services/userService';

async function userController(req: Request, res: Response): Promise<Response> {
  const userCredentials = req.headers;
  const response = await getUser(userCredentials);

  if (response.success === true) {
    return res.status(response.status).json(response);
  }

  return res.status(response.status).json(response);
}

export default userController;
