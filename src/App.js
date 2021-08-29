import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import store from "./redux/Store"
import Dashboard from "./views/dashboard"
import Home from "./views/home"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex" id="wrapper">
          <Sidebar></Sidebar>
          <div id="page-content-wrapper">
            <Header></Header>
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
