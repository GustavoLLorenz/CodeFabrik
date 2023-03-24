import { UserController } from "controllers/UserController";
import { Router } from "express";
import { validateUserCreate } from "middlewares/midlleWares";

const routes = Router();

routes.post("/user", validateUserCreate, new UserController().create);

export { routes }

