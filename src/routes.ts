
import { UserController } from "controllers/UserController";
import { Router } from "express";
import { validateUserCreate } from "middlewares/midlleWares";

const routes = Router();



routes.post("/user", validateUserCreate, new UserController().create);

routes.get("/user", new UserController().findAllUsers);

routes.get("/user/findByCpf", new UserController().findByCpf);

routes.patch("/user/deleteByCpf", new UserController().deleteByCpf);

export { routes }

