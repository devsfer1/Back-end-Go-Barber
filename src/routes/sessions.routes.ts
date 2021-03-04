import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthenticateUserService();

  const { user } = await authenticateUser.execute({
    email,
    password
  });

  delete user.password;

  return res.json({ user });

});

export default sessionsRouter;