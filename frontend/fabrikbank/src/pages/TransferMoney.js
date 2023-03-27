import React from "react";
import {connect} from 'react-redux'
import axios from 'axios'
import useForm from "../hooks/useForm";
import { useState } from "react";
import { actionCreatorSaveUser, actionLogout } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Transfer.css'
import Input from "../components/Input";
import Button from "../components/Button";


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
      <Input className={'input1'} placeholder={'Encontre por cpf'} handleChange={form.handleChange} name={'pplToTransfer'}/>
      <Button className={'transferbutton'} formCpf={true} formPassword={true} onClick={handleFindPpl} text={'Procurar Pessoa'}/>
      {pplFound.length !== 0 && success === false ?(
        
        <div className="maindiv">
          <h3 className="tranfertext">{pplFound.user_name}</h3>
        <label className="tranfertext">Valor da Transferencia:  </label>
        <Input className={'input1'} placeholder={'0,00'} type={'number'} handleChange={form.handleChange} name={'valor'}/>
      <button className="transferbutton" onClick={handleTransfer} disabled={Number(user.wallet.saldo) < Number(form.form.valor) ? true: false}>
      {Number(user.wallet.saldo) < Number(form.form.valor) ? <>Saldo insuficiente</>: <>Confirmar transferencia</>}
      </button>
        </div>
      ): <div className="maindiv">
        <Button className={'newtransferbutton'} formCpf={true} formPassword={true} onClick={resetSuccess} text={'Realizar outra Transferencia'}/>
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