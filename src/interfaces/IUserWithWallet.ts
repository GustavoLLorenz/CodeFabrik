import ICarteira from "./ICarteira";
import IUser from "./IUser";

export interface IUserWithWallet{
  id?: string,
  user_name: string,
  password: string,
  cpf_cnpj: string,
  created_at?: Date,
  updated_at?: Date,
  deleted_at?: Date,
  wallet: ICarteira


}