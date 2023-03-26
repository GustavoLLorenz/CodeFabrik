import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'
import {connect} from 'react-redux'
import { actionCreatorSaveUser } from '../redux/actions'

import { useEffect } from 'react'

function Login(props) {
  const form = useForm()
  const { dispatch, logado } = props
 

useEffect(() => {
  console.log('chamei')
  if(logado) {
    return props.history.push('/home')
  } else {
    return props.history.push('/')
  }
  
}, [dispatch])
console.log(form.form)



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
  <div>
    <input placeholder='digite seu cpf' onChange={(event) => form.handleChange(event)} name="cpf_cnpj"/>
    <input placeholder='digite sua senha' onChange={(event) => form.handleChange(event)} name="password"/>
    <button 
    onClick={loginUser}
    disabled={
      form.form.cpf_cnpj  && form.form.password ? false : true
    }
    >Entrar</button>
    <Link to="/createaccount">criar senha</Link>

  </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado
})

export default connect(mapStateToProps)(Login)