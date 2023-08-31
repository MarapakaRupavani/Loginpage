import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css'
import Login from './Login'
import Header from './Header'

const App=()=>(
  <BrowserRouter>
  < Switch>
    <Route exact path="/" component={Header}/>
    <Route exact path="/login" component={Login}/>
  </ Switch>
  </BrowserRouter>
)
export default App