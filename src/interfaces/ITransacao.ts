export default interface ITransacao {
  id?: string,
  carteira_id: string,
  tipo: string,
  valor_transacao: string,
  created_at?:string,
  updated_at?: string,
  deleted_at?: string

}