import '../css/Login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'
import {connect} from 'react-redux'
import { actionCreatorSaveUser } from '../redux/actions'
import Input from '../components/Input'
import { useEffect } from 'react'
import Button from '../components/Button'

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



  const loginUser = async () => {
      // props.history.push("/home")
    try {
      axios.post(`http://localhost:3000/user/login`, {
        cpf_cnpj: form.form.cpf_cnpj,
        password: form.form.password
      }).then(function (response){
        dispatch(actionCreatorSaveUser(response.data))
      })
      props.history.push("/home")
    } catch (error) {
      
    }
   }
  return (
  <div className='login'>
    <h1 className='welcome'>Faça seu login !</h1>
    {/* <input className='input' placeholder='000.000.000-00' onChange={(event) => form.handleChange(event)} name="cpf_cnpj"/> */}
    <Input className={'input'} placeholder={'000.000.000-00'} handleChange={form.handleChange} name={'cpf_cnpj'} />
    {/* <input className='input' placeholder='******' onChange={(event) => form.handleChange(event)} name="password"/> */}
    <Input className={'input'} placeholder={'******'} handleChange={form.handleChange} name={'password'}/>
    {/* <button className='button'
    onClick={loginUser}
    disabled={
      form.form.cpf_cnpj  && form.form.password ? false : true
    }
    >Login</button> */}
    <Button className={'button'} onClick={loginUser} formCpf={form.form.cpf_cnpj} formPassword={form.form.password} text={'Login'}/>
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