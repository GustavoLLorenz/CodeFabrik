export default interface ITransacao {
  id?: string,
  carteira_id: string,
  tipo: string,
  valor_trasacao: string,
  created_at?:string,
  updated_at?: string,
  deleted_at?: string

}