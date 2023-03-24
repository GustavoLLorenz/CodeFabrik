import { Request, Response } from "express";
import { UserService } from "services/UserService";



export class UserController {
  async create(request: Request, response: Response) {
    const { user_name , cpf_cnpj } = request.body

    if (!user_name || !cpf_cnpj) {
      return response.status(401).json({message: "Todos os campos devem ser preenchidos"})
    }
  
    const service = new UserService()

    const newUser = await service.create(request.body);

    if (newUser instanceof Error) {
      return response.status(400).json(newUser.message)
    }

    return response.json(newUser);
  }
}