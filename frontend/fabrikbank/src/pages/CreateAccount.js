import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../components/Input";


export default function CreateAccount(props) {
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
    props.history.push("/")
   }
   

  return (
    <div className='login'>
    <h2 className="h2CreateAccount">Para abrir uma conta no Fabrikbank é muito simples, basta preencher o formuloário abaixo</h2>
    <Input className={'input'} placeholder={'Digite seu cpf'} handleChange={form.handleChange} name={'cpfcnpj'}/>
    <Input className={'input'} placeholder={'Digite seu nome completo'} handleChange={form.handleChange} name={'nome'}/>
    <Input className={'input'} placeholder={'Digite sua senha'} handleChange={form.handleChange} name={'senha'}/>
    <Input className={'input'} placeholder={'Confirme sua senha'} handleChange={form.handleChange} name={'confirmaSenha'}/>

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