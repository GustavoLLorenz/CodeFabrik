import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";

export default function CreateAccount() {
  const form = useForm()
  console.log('form no componente create acccount', form)
  async function getUser() {

      let response = await fetch(`http://localhost:3000/user`, {
        method: "GET",
       // body: {user_name: "aaaaaa",cpf_cnpj: "125.516.120-32", password:"123456" }
      });
      let userData = await response.json();
      return userData;
   }

   const createUser = async () => {
    try {
      axios.post(`http://localhost:3000/user`, {
        user_name: 'pelo front',
        cpf_cnpj: "135.516.120-32",
        password: "123456"
      }).then(function (response){
        console.log('ee',response)
      })
      // const response = await  axios.get(`http://localhost:3000/user`)
      // const data = await response.json()
      // console.log(data)
      // return data;
      
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
    <button onClick={createUser}>Criar contaa</button>

  </div>
  )
}