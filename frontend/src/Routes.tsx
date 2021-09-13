import Dashboard from 'assets/Pages/Dashboard';
import Home from 'assets/Pages/Home';
import { BrowserRouter,Route,Switch} from 'react-router-dom'; 

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;
  
  