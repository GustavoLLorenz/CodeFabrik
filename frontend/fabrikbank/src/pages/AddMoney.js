import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import {connect} from 'react-redux'
import { actionCreatorSaveUser } from "../redux/actions";
import { Link } from "react-router-dom";

//actionCreatorSaveUser


function AddMoney(props){
  const form = useForm()

const {user, dispatch} = props;



const addMoney = async () => {

  
try {
  axios.post(`http://localhost:3000/wallet/createTransaction/${user.wallet.id}`, {
    tipo: "entrada",
    valor_transacao: form.form.valor_transacao
  }).then(function (response){
    console.log('response', response.data)
    
  })
  await axios.get(`http://localhost:3000/user/findById/${user.id}`, {
      
  cpf_cnpj:"125.516.120-62"
  }).then(function (response){
    dispatch(actionCreatorSaveUser(response.data))
    console.log('response', response.data)
    
  })

} catch (error) {
  
}

props.history.push("/home")
}


return (
  <div className="login">
    <h2 className="text">Digite a quantia que você quer adicionar</h2>
    <input className="input1" name='valor_transacao' onChange={(event) => form.handleChange(event)}/>
    <button className="transferbutton" onClick={addMoney}>Confirmar!</button>
    <Link to="/home"className="link">Voltar</Link>
  </div>
)
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado
})

export default connect(mapStateToProps)(AddMoney);