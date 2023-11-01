import { Request, Response } from 'express';
import { signInUser } from '../services/userService';

async function logInController(req: Request, res: Response): Promise<Response> {
  const userCredentials = req.body;
  const response = await signInUser(userCredentials);

  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');

  if (response.success === true) {    
    res.header('Authorization', response.data.token);
  }

  return res.status(response.status).json(response);
}

export default logInController;
