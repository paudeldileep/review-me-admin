
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PublicRoute from './components/Utils/Routing/PublicRoute';
import PrivateRoute from './components/Utils/Routing/PrivateRoute';
import Login from './pages/Index/Login';
import Dashboard from './pages/Home/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full mx-1 bg-gradient-to-br from-gray-100 to-gray-200">
        <Switch>
          {/* <Route exact path="/" component={Index} /> */}
          <PublicRoute exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
