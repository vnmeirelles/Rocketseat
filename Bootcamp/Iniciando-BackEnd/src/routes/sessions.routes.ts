import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
      const {email, password} = request.body;

      const AuthenticateUser = new AuthenticateUserService();

      const {user} = await AuthenticateUser.execute({
        email,
        password,
      });

    delete user.password;

    return response.json({user});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
