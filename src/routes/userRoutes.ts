
import { UserController } from "controllers/UserController";
import { Router } from "express";
import { validateUserCreate } from "middlewares/midlleWares";

const userRoutes = Router();



userRoutes.post("/user", validateUserCreate, new UserController().create);

userRoutes.get("/user", new UserController().findAllUsers);

userRoutes.get("/user/findByCpf/:cpf", new UserController().findByCpf);
userRoutes.get("/user/findById/:id", new UserController().findById);

userRoutes.patch("/user/deleteByCpf", new UserController().deleteByCpf);

userRoutes.post("/user/login", new UserController().userLogin);

export { userRoutes }

