import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/LiveEvents-Admin/Details";



function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Details />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
