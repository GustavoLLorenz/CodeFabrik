import { Request, Response } from "express";
import { UserService } from "services/UserService";



export class UserController {

  async create(req: Request, res: Response) {
    const { user_name , cpf_cnpj } = req.body

    if (!user_name || !cpf_cnpj) {
      return res.status(401).json({message: "Todos os campos devem ser preenchidos"})
    }
   
    const service = new UserService()

    const newUser = await service.create(req.body);

    if (newUser instanceof Error) {
      return res.status(400).json(newUser.message)
    }

    return res.json(newUser);
  }

  async findAllUsers(_req: Request, res: Response) {
    const service = new UserService()

    const allUsers = await service.findAllUsers();

    return res.status(200).json(allUsers);
  }

  async findByCpf(req: Request, res: Response) {
    const {cpf_cnpj } = req.body

    if (!cpf_cnpj) {
      return res.status(401).json({message: "CPF/CNPJ não foi informado."})
    }
    const service = new UserService()

    const user = await service.findByCpf(cpf_cnpj);

    if(user instanceof Error) {
      return res.status(400).json(user.message)
    }

    return res.status(200).json(user);
  }

  async deleteByCpf(req: Request, res: Response) {
    const {cpf_cnpj } = req.body

    if (!cpf_cnpj) {
      return res.status(401).json({message: "CPF/CNPJ não foi informado."})
    }
    const service = new UserService()

    const user = await service.deleteByCpf(cpf_cnpj);

    if(user instanceof Error) {
      return res.status(400).json(user.message)
    }

    return res.status(200).json(user);
  }
}