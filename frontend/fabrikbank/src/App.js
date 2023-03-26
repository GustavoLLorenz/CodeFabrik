
import './App.css';
import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
 const {logado} = props

  return (
    <BrowserRouter>
    <Switch>
       <Route exact path="/createaccount" component={CreateAccount}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path="/" component={Login}/>

       </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => ({
  loado: state.logado
})

export default  connect(mapStateToProps)(App);
