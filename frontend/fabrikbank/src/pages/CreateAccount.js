import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { Link } from "react-router-dom";


export default function CreateAccount() {
  const form = useForm()

   const createUser = async () => {
    try {
      axios.post(`http://localhost:3000/user`, {
        user_name: form.form.nome,
        cpf_cnpj: form.form.cpfcnpj,
        password: form.form.senha
      }).then(function (response){
        console.log('ee',response)
      })
      
    } catch (error) {
      console.log('deu erro', error)
      
    }
   }
   

  return (
    <div className='login'>
    <h2 className="h2CreateAccount">Para abrir uma conta no Fabrikbank é muito simples, basta preencher o formuloário abaixo</h2>
    <input className='input' placeholder='Digite seu cpf' onChange={(event) => form.handleChange(event)} name="cpfcnpj"/>
    <input className='input' placeholder='Digite seu nome completo'onChange={(event) => form.handleChange(event)} name="nome"/>
    <input className='input' placeholder='Digite sua senha' onChange={(event) => form.handleChange(event)} name="senha"/>
    <input className='input' placeholder='Confirme sua senha' onChange={(event) => form.handleChange(event)} name="confirmaSenha"/>
    <button className='button'
    onClick={createUser} disabled={
      form.form.cpfcnpj && form.form.nome && form.form.senha  && form.form.senha === form.form.confirmaSenha ? false : true
    }>Criar conta</button>
    <footer className="footer">
      <Link className='link' to="/">Página de Login</Link>
    </footer>

  </div>
  )
}