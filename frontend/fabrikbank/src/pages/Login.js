import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
  <div>
    <input placeholder='digite seu cpf'/>
    <input placeholder='digite sua senha'/>
    <Link to="/createaccount">criar senha</Link>

  </div>
  )
}