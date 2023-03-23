import { Request, Response } from "express";
import { UserService } from "services/UserService";



export class UserController {
  async handle(request: Request, response: Response) {
 
    console.log('aaaß',request.body)
    
    const service = new UserService()
    const newUser = await service.create(request.body)

    return response.json(newUser);
  }
}