import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useState } from "react";
import {
  TableHead,
  TableRow,

  TableCell,
  TableContainer,
} from '@mui/material'
import { Link } from "react-router-dom";

function Extrato(props){
  const {user} = props
  const [extrato,setExtrato] = useState([]);

  useEffect(() => {
    const findAll = async () => {
      try {
        await axios.get(`http://localhost:3000/transactions/${user.wallet.id}`)
        .then(function(result) {
          setExtrato(result.data)
        })
        
      } catch (error) {
        console.log('deu erro', error)
      }
    }
    findAll()
  }, [])
  const TABLE_HEADER = [
     'tipo',
     'valor',
     'data'
  ]

  return (
    <div className="maindiv">
      <Link className="link" to="/home">Voltar</Link>
      <TableContainer className="listContainer">
      <TableHead className="listhead">
      {TABLE_HEADER.map((item) => {
        return (
            <TableCell className="headCell"  >{item}</TableCell>
        )
          
      })}
       </TableHead>
      {extrato.length > 0?  extrato.map((item, index) => {
       return (
        <TableRow key={index} className="listrow">
          <TableCell className="bodycell" style={item.tipo === 'entrada' ? {color: "#16FF00"} : {color: "red"}}>{item.tipo}</TableCell>
          <TableCell className="bodycell"> {item.tipo === 'saida'? `- R$ ${item.valor_transacao}`: `R$ ${item.valor_transacao}`}</TableCell>
          <TableCell className="bodycell">{item.created_at.slice(0,10)}</TableCell>
        </TableRow>
       )
      }): <p className="tranfertext">nenhuma transacao encontrada =/</p>}
      </TableContainer>
    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
  logado: state.logado,
 
})

export default connect(mapStateToProps)(Extrato)