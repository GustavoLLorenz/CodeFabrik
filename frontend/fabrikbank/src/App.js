
import './App.css';
import  { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <BrowserRouter>
       <Route exact path="/createaccount" component={CreateAccount}/>
       <Route exact path="/" component={Login}/>
    </BrowserRouter>
  );
}

export default  App;
