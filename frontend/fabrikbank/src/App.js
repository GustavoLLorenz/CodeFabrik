
import './App.css';
import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import {connect} from 'react-redux'
import AddMoney from './pages/AddMoney';
import TransferMoney from './pages/TransferMoney';
import Extrato from './pages/Extrato';

function App(props) {
 const {logado} = props

  return (
    <BrowserRouter>
    <Switch>
       <Route exact path="/createaccount" component={CreateAccount}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path="/adicionarsaldo" component={AddMoney}/>
       <Route exact path="/transfer" component={TransferMoney}/>
       <Route exact path="/extrato" component={Extrato}/>

       <Route exact path="/" component={Login}/>

       </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => ({
  loado: state.logado
})

export default  connect(mapStateToProps)(App);
