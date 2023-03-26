import React from "react";
import {connect} from 'react-redux'


function Home(props) {
  const { user } = props
  return (
    <>
      <header>Bem vindo! {user.user_name}</header>
      <body>
        <div>R$ {user.wallet.saldo} </div>
      </body>
    </>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado
})

export default connect(mapStateToProps)(Home);