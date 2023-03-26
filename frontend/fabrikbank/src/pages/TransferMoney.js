import React from "react";
import {connect} from 'react-redux'
import axios from 'axios'
import useForm from "../hooks/useForm";
import { useState } from "react";
import { actionCreatorSaveUser, actionLogout } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Transfer.css'


function TransferMoney( props) {
  const {user, dispatch} = props
  const form = useForm()
  const [pplFound,setPplFound] = useState([])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    updateUserWallet()
  }, [success])
  
 
  const handleTransfer = async () => {
   
    try {
       await axios.post(`http://localhost:3000/wallet/createTransaction/${pplFound.wallet.id}`, {
        tipo: "entrada",
        valor_transacao: form.form.valor.toString()
      }).then(function(result) {
        console.log('result', result.data)
       // setSuccess(true)
      })
      await axios.post(`http://localhost:3000/wallet/createTransaction/${user.wallet.id}`, {
        tipo: "saida",
        valor_transacao: form.form.valor.toString()
      }).then(function(result) {
        console.log('segundo result', result.data)
        setSuccess(true)
      })
      
    } catch (error) {
      console.log(error)
      
    }
  }


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


  const handleFindPpl = async () => {
    try {
      await axios.get(`http://localhost:3000/user/findByCpf/${form.form.pplToTransfer}`).then(function(result) {
        setPplFound(result.data)
      })
      
    } catch (error) {
      console.log('deu erro', error)
      
    }
  }

  const resetSuccess = () => {
    setSuccess(false)
  }

  return (
    <div className="maindiv">
      <h2 className="tranfertext">
        Saldo em conta R$ {user.wallet.saldo}
      </h2>
      <label className="tranfertext" > Para quem voce quer transferir?</label>
      <input name='pplToTransfer' className="input1" onChange={(event) => form.handleChange(event)} placeholder='Encontre por cpf'/>
      
      <button className="transferbutton" onClick={handleFindPpl}>Procurar Pessoa</button>
      {pplFound.length !== 0 && success === false ?(
        
        <div className="maindiv">
          <h3 className="tranfertext">{pplFound.user_name}</h3>
        <label className="tranfertext">Valor da Transferencia:  </label>
        <input className="input1" name='valor' placeholder="0,00" type='number' onChange={(event) => form.handleChange(event)}/>
     
      <button className="transferbutton" onClick={handleTransfer} disabled={Number(user.wallet.saldo) < Number(form.form.valor) ? true: false}>
      {Number(user.wallet.saldo) < Number(form.form.valor) ? <>Saldo insuficiente</>: <>Confirmar transferencia</>}
      </button>
        </div>
      ): <div className="maindiv">
        <button className="newtransferbutton" onClick={() => resetSuccess()}>Realizar outra Transferencia</button>
        
        </div>}
   
        <Link className="tranferlink"to="/home">Voltar para Home</Link>
  

    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado,
 
})

export default connect(mapStateToProps)(TransferMoney);