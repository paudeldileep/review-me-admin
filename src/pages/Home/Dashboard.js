import React from "react";
import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Overview from "../../components/MainContent/Overview";
import Users from "../../components/MainContent/Users";
import Products from "../../components/MainContent/Products";

const Dashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <div className="w-full min-h-screen">
        <header className="w-full h-12 rounded-md sticky top-0 mb-1 border border-purple-400 z-10">
          <Navbar url={url} />
        </header>
        <div className="flex">
          <aside className="w-1/12 min-w-max md:w-1/5 border rounded-md border-purple-500">
            <Sidebar url={url} />
          </aside>
          <div className="w-full flex-1 mx-1 px-2 py-1 rounded-md min-h-screen border border-red-400">
            <Switch>
              <Route exact path={`${path}/overview`} component={Overview} />
              <Route exact path={`${path}/users`} component={Users} />
              <Route exact path={`${path}/products`} component={Products} />

              <Route exact path={`${path}`}>
                <Redirect to="/dashboard/overview" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
