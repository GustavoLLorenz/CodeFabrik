import React from "react";
import {connect} from 'react-redux'
import useForm from "../hooks/useForm";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Transfer.css'
import Input from "../components/Input";
import Button from "../components/Button";
import { updateUserWallet, handleFindPpl, handleTransfer } from "../utils/fetchs";



function TransferMoney( props) {
  const {user, dispatch} = props
  const form = useForm()
  const [pplFound,setPplFound] = useState([])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    updateUserWallet(dispatch,user.id,user.cpf_cnpj)
  }, [success])
  


  const resetSuccess = () => {
    setSuccess(false)
  }

  return (
    <div className="maindiv">
      <h2 className="tranfertext">
        Saldo em conta R$ {user.wallet.saldo}
      </h2>
      <label className="tranfertext" > Para quem voce quer transferir?</label>
      <Input className={'input1'} type={'number'} placeholder={'Encontre por cpf'} handleChange={form.handleChange} name={'pplToTransfer'}/>
      <Button className={'transferbutton'} formCpf={true} formPassword={true} onClick={() => handleFindPpl(setPplFound, form.form.pplToTransfer )} text={'Procurar Pessoa'}/>
      {pplFound.length !== 0 && success === false ?(
        
        <div className="maindiv">
          <h3 className="tranfertext">{pplFound.user_name}</h3>
        <label className="tranfertext">Valor da Transferencia:  </label>
        <Input className={'input1'} placeholder={'0,00'} type={'number'} handleChange={form.handleChange} name={'valor'}/>
      <button className="transferbutton" onClick={() =>handleTransfer(pplFound.wallet.id, form.form.valor, user.wallet.id, setSuccess )} disabled={Number(user.wallet.saldo) < Number(form.form.valor) ? true: false}>
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