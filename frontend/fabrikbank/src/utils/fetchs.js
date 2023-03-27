import axios from 'axios'
import formataCPF from '../utils/cpfFormat'
import { actionCreatorSaveUser } from '../redux/actions'


export const loginUser = async (props,dispatch, cpf, password) => {
      // props.history.push("/home")
    try {
      axios.post(`http://localhost:3000/user/login`, {
        cpf_cnpj: formataCPF(cpf),
        password: password
      }).then(function (response){
        dispatch(actionCreatorSaveUser(response.data))
      })
      props.history.push("/home")
    } catch (error) {
      
    }
   }

  
   export  const createUser = async (props, name, cpf, password) => {
    try {
      axios.post(`http://localhost:3000/user`, {
        user_name: name,
        cpf_cnpj: formataCPF(cpf),
        password: password
      }).then(function (response){
        console.log('ee',response)
      })
      
    } catch (error) {
      console.log('deu erro', error)
      
    }

    props.history.push("/")
   }

   export const updateUserWallet = async ( dispatch, id, cpf) => {
    
    try {
      await axios.get(`http://localhost:3000/user/findById/${id}`, {
        
      cpf_cnpj: cpf
      }).then(function (response){
        dispatch(actionCreatorSaveUser(response.data))
        console.log('response', response.data)
        
      })
    
    } catch (error) {
      
    }
  
  }

  export  const handleFindPpl = async (setPplFound, cpf) => {
    try {
      await axios.get(`http://localhost:3000/user/findByCpf/${formataCPF(cpf)}`).then(function(result) {
        setPplFound(result.data)
      })
      
    } catch (error) {
      console.log('deu erro', error)
      
    }
  }

  export const handleTransfer = async (pplId, valor, userId, setSuccess) => {
   
    try {
       await axios.post(`http://localhost:3000/wallet/createTransaction/${pplId}`, {
        tipo: "entrada",
        valor_transacao: valor.toString()
      }).then(function(result) {
        console.log('result', result.data)
       // setSuccess(true)
      })
      await axios.post(`http://localhost:3000/wallet/createTransaction/${userId}`, {
        tipo: "saida",
        valor_transacao: valor.toString()
      }).then(function(result) {
        console.log('segundo result', result.data)
        setSuccess(true)
      })
      
    } catch (error) {
      console.log(error)
      
    }
  }

  export const findAll = async (id,setExtrato) => {
    try {
      await axios.get(`http://localhost:3000/transactions/${id}`)
      .then(function(result) {
        setExtrato(result.data)
      })
      
    } catch (error) {
      console.log('deu erro', error)
    }
  }

  export const adicionaCash = async (walletId, valor_transacao, userId, dispatch, props) => {

  
    try {
      axios.post(`http://localhost:3000/wallet/createTransaction/${walletId}`, {
        tipo: "entrada",
        valor_transacao: valor_transacao
      }).then(function (response){
        console.log('response', response.data)
        
      })
      await axios.get(`http://localhost:3000/user/findById/${userId}`).then(function (response){
        dispatch(actionCreatorSaveUser(response.data))
        console.log('response', response.data)
        
      })
    
    } catch (error) {
      
    }
    
    props.history.push("/home")
    }
