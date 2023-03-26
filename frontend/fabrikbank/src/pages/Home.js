import React from "react";
import {connect} from 'react-redux'
import { actionLogout } from "../redux/actions";
import { Link } from "react-router-dom";


function Home(props) {
  const { user , dispatch} = props

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