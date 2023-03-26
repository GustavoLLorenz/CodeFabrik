import React from "react";
import {connect} from 'react-redux'
import { actionCreatorSaveUser, actionLogout } from "../redux/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


function Home(props) {
  const { user , dispatch} = props


  useEffect(() => {
    if(Object.keys(user).length !== 0) {
      updateUserWallet()
    }
  }, [])


const updateUserWallet = async () => {
  console.log('userCnpj', user.cpf_cnpj)
  try {
    await axios.get(`http://localhost:3000/user/findById/${user.id}`, {
      
    cpf_cnpj:"125.516.120-62"
    }).then(function (response){
      dispatch(actionCreatorSaveUser(response.data))
      console.log('response', response.data)
      
    })
  
  } catch (error) {
    
  }

}

  const logout = () => {
    dispatch(actionLogout())
    props.history.push('/')
  }

  return (
    <>
  
    
    {Object.keys(user).length !== 0?
    <>
    <header>Bem vindo! {user.user_name}</header>
      <button onClick={logout}>Sair</button>
      <body>
        {user.wallet !== undefined ? <div>R$ {user.wallet.saldo} </div> : <div>carregando...</div>}
        <Link to="/adicionarsaldo">Adicionar saldo</Link>
        <Link to="/transfer">Transferencia</Link>
      </body>
      </> : 
      <div>
        Você não está logado!
        <Link to="/">Login</Link>
       
      
      </div>}
     

    </>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado,
 
})

export default connect(mapStateToProps)(Home);