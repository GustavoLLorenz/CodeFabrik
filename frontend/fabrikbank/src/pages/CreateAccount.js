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
    <div>
    <input placeholder='digite seu cpf' onChange={(event) => form.handleChange(event)} name="cpfcnpj"/>
    <input placeholder='digite seu nome'onChange={(event) => form.handleChange(event)} name="nome"/>
    <input placeholder='digite sua senha' onChange={(event) => form.handleChange(event)} name="senha"/>
    <input placeholder='confirme sua senha' onChange={(event) => form.handleChange(event)} name="confirmaSenha"/>
    <button onClick={createUser} disabled={
      form.form.cpfcnpj && form.form.nome && form.form.senha  && form.form.senha === form.form.confirmaSenha ? false : true
    }>Criar contaa</button>
    <footer>
      <Link to="/">Página de Login</Link>
    </footer>

  </div>
  )
}