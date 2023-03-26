import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import {connect} from 'react-redux'


function AddMoney(props){
  const form = useForm()
const {user, dispatch} = props;

const addMoney = async () => {
  console.log(user.wallet.id)
  props.history.push("/home")
try {
  axios.post(`http://localhost:3000/wallet/createTransaction/${user.wallet.id}`, {
    tipo: "entrada",
    valor_transacao: form.form.valor_transacao
  }).then(function (response){
    console.log('response', response.data)
  })
} catch (error) {
  
}
}

return (
  <div>
    <input name='valor_transacao' onChange={(event) => form.handleChange(event)}/>
    <button onClick={addMoney}>Confirmar!</button>
  </div>
)
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado
})

export default connect(mapStateToProps)(AddMoney);