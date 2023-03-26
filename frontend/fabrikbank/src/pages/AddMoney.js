import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import {connect} from 'react-redux'

//actionCreatorSaveUser


function AddMoney(props){
  const form = useForm()

const {user, } = props;



const addMoney = async () => {
  console.log(user.wallet.id)
  
try {
  axios.post(`http://localhost:3000/wallet/createTransaction/${user.wallet.id}`, {
    tipo: "entrada",
    valor_transacao: form.form.valor_transacao
  }).then(function (response){
    console.log('response', response.data)
    
  })

} catch (error) {
  
}

props.history.push("/home")
}

// const updateUserWallet = async () => {
//   console.log('userCnpj', user.cpf_cnpj)
//   try {
//   axios.get(`http://localhost:3000/user/findByCpf`, {cpf_cnpj: '125.516.120-22'})
//   .then(function(response) {
//     console.log('depois do fetch pra atualizar cart', response.data)
//     // dispatch(actionCreatorSaveUser(response.data))
//   })
    
//   } catch (error) {
    
//   }

// }

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