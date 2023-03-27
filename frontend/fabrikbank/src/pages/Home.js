import React from "react";
import {connect} from 'react-redux'
import {  actionLogout } from "../redux/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import '../css/Home.css'
import { mockOffer } from "../mocks/mockOffer";
import CardService from "../components/CardService";
import { updateUserWallet } from "../utils/fetchs";


function Home(props) {
  const { user , dispatch} = props


  useEffect(() => {
    if(Object.keys(user).length !== 0) {
      updateUserWallet(dispatch, user.id)
    }
  }, [])


  const logout = () => {
    dispatch(actionLogout())
    props.history.push('/')
  }

  return (
    <>
  
    
    {Object.keys(user).length !== 0?
    <>
    <header className="headerHome">
      <h2 className="headerTitle">Bem vindo! {user.user_name}</h2>
      <button className="logoutButton"onClick={logout}>Sair</button>

    </header>
      
      <body className="bodyHome">
       
        {user.wallet !== undefined ? <h1 className="divSaldo">Saldo da carteira R$ {user.wallet.saldo}</h1>  : <div>carregando...</div>}
      <div className="linkDiv">
        <Link className="linkHome" to="/adicionarsaldo">Adicionar saldo</Link>
        <Link className="linkHome1" to="/transfer">Transferencia</Link>
        <Link className="linkHome1" to="/extrato">Ver extrato da conta</Link>
      </div>
      <div className="mainCardDiv">
        {mockOffer.map((item) => {
          return (
            <CardService title={item.title} description={item.description}/>
          )
          
        })}
      </div>
      </body>
      </> : 
      <div className="divNaoLogado">
        <h2>Você não está logado!</h2>
        <Link className="linkHome2" to="/">Login</Link>
       
      
      </div>}
     

    </>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado,
 
})

export default connect(mapStateToProps)(Home);