import AuthController from '../controllers/auth.controller';
import { Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

export const route = (router:Router) => {
  const authCon = new AuthController;
  const userCon = new UserController;
  
  router.get("/", (req:Request, res:Response) => { res.send("API Only"); });
  router.post("/api/register", authCon.signup);
  router.post("/api/login", authCon.login);
  router.get("/api/me", authMiddleware, userCon.getDetail);
};
