import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage'
import Goal from './pages/Goal'
import Past from './pages/Past'
import Research from './pages/Research'
import Conclusion from './pages/Conclusion'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/goal'>
            <Goal />
          </Route>
          <Route exact path='/past'>
            <Past />
          </Route>
          <Route exact path='/research'>
            <Research />
          </Route>
          <Route exact path='/conclusion'>
            <Conclusion />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
