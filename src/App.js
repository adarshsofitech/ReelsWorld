import SignUp from'./Components/SignUp'
import Login from'./Components/Login'
import Feed from'./Components/Feed'
import Profile from'./Components/Profile'
import passwordReset from'./Components/passwordReset'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute'
function App() {
  // styleSheet for a div
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/passwordReset" component={passwordReset}/>
      <PrivateRoute path="/profile/:id" component={Profile}/>
      <PrivateRoute path="/" component={Feed}/>
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
// exporting App component
export default App;