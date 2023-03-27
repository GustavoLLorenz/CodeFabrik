import React from "react";
import useForm from "../hooks/useForm";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { adicionaCash } from "../utils/fetchs";

//actionCreatorSaveUser


function AddMoney(props){
  const form = useForm()

const {user, dispatch} = props;



return (
  <div className="login">
    <h2 className="text">Digite a quantia que você quer adicionar</h2>
    <Input className={'input1'} placeholder={' 00,00'} handleChange={form.handleChange} name={'valor_transacao'}/>
    <Button className={'transferbutton'}  formCpf={form.form.valor_transacao ? true : false} formPassword={form.form.valor_transacao ? true : false} onClick={ () => adicionaCash(user.wallet.id,form.form.valor_transacao, user.id, dispatch, props)} text={'Confirmar'}/>
    <Link to="/home"className="link">Voltar</Link>
  </div>
)
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado
})

export default connect(mapStateToProps)(AddMoney);