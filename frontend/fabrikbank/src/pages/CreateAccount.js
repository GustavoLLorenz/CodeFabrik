import React from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { createUser } from "../utils/fetchs";


export default function CreateAccount(props) {
  const form = useForm()


  return (
    <div className='login'>
    <h2 className="h2CreateAccount">Para abrir uma conta no Fabrikbank é muito simples, basta preencher o formuloário abaixo</h2>
    <Input className={'input'} type={'number'} placeholder={'Digite seu cpf'} handleChange={form.handleChange} name={'cpfcnpj'}/>
    <Input className={'input'} placeholder={'Digite seu nome completo'} handleChange={form.handleChange} name={'nome'}/>
    <Input className={'input'} placeholder={'Digite sua senha'} handleChange={form.handleChange} name={'senha'}/>
    <Input className={'input'} placeholder={'Confirme sua senha'} handleChange={form.handleChange} name={'confirmaSenha'}/>

    <button className='button'
    onClick={() => createUser(props, form.form.nome, form.form.cpfcnpj, form.form.senha)} disabled={
      form.form.cpfcnpj && form.form.nome && form.form.senha  && form.form.senha === form.form.confirmaSenha ? false : true
    }>Criar conta</button>
    <footer className="footer">
      <Link className='link' to="/">Página de Login</Link>
    </footer>

  </div>
  )
}