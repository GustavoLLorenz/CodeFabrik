import { UserController } from "controllers/UserController";
import { Router } from "express";

const routes = Router();

routes.post("/user", new UserController().handle);

export { routes }

