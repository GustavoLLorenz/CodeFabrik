import React from "react";
import {connect} from 'react-redux'
import axios from 'axios'
import useForm from "../hooks/useForm";
import { useState } from "react";
import { actionCreatorSaveUser, actionLogout } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";


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
    <div>
      <div>
        Saldo em conta {user.wallet.saldo}
      </div>
      <label> Para quem voce quer transferir?
      <input name='pplToTransfer' onChange={(event) => form.handleChange(event)} placeholder='Encontre por cpf'/>
      </label>
      <button onClick={handleFindPpl}>Procurar Pessoa</button>
      {pplFound.length !== 0 && success === false ?(
        
        <div>
          <h3>{pplFound.user_name}</h3>
        <label>Valor da Transferencia: 
        <input name='valor' placeholder="0,00" type='number' onChange={(event) => form.handleChange(event)}/>
      </label>
      <button onClick={handleTransfer} disabled={Number(user.wallet.saldo) < Number(form.form.valor) ? true: false}>
      {Number(user.wallet.saldo) < Number(form.form.valor) ? <>Saldo insuficiente</>: <>Confirmar transferencia</>}
      </button>
        </div>
      ): <div>
        <button onClick={() => resetSuccess()}>Realizar outra Transferencia</button>
        
        </div>}
        <footer>
        <Link to="/home">Voltar para Home</Link>
        </footer>

    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado,
 
})

export default connect(mapStateToProps)(TransferMoney);