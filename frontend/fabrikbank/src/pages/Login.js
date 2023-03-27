import '../css/Login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import {connect} from 'react-redux'
import Input from '../components/Input'
import { useEffect } from 'react'
import Button from '../components/Button'
import { loginUser } from '../utils/fetchs'

function Login(props) {
  const form = useForm()
  const { dispatch, logado } = props
 

useEffect(() => {

  if(logado) {
    return props.history.push('/home')
  } else {
    return props.history.push('/')
  }
  
}, [dispatch])



  return (
  <div className='login'>
    <h1 className='welcome'>Faça seu login !</h1>
    <Input className={'input'} type={'number'} placeholder={'000.000.000-00'} handleChange={form.handleChange} name={'cpf_cnpj'} />
    <Input className={'input'} placeholder={'******'} handleChange={form.handleChange} name={'password'}/>
    <Button className={'button'} onClick={() =>loginUser(props,dispatch,form.form.cpf_cnpj, form.form.password)} formCpf={form.form.cpf_cnpj} formPassword={form.form.password} text={'Login'}/>
    <h4 className='text'>Não possui uma conta no Fabrikbank?</h4>
    <Link className='link' to="/createaccount">criar conta</Link>
  </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado
})

export default connect(mapStateToProps)(Login)