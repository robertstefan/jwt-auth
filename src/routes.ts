import { Express, Request, Response } from 'express';
import logInController from './controllers/logInController';
import signUpController from './controllers/signUpController';
import validateRequest from './middlewares/validateRequest';
import signInSchema from './schemas/signInSchema';
import signUpSchema from './schemas/signUpSchema';
import userController from './controllers/userController';

function routes(app: Express): void {
  app.get('/api', (_: Request, res: Response) =>
    res.status(200).send('Hello from server...')
  );

  app.post('/auth/signup', validateRequest(signUpSchema), signUpController);

  app.post('/auth/login', validateRequest(signInSchema), logInController);

  app.get('/auth/user', userController);
}

export default routes;
