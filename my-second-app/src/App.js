
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import WishList from './WishList';
function App() {
  return (
    <Router>
     <Navbar/>
      <div className="App">
      
     <Switch>
     <Route exact path="/">
     <Home/>
     </Route>

     <Route exact path="/WishList">
     <WishList/>
     </Route>
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
