import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import UploadPage from './pages/upload';
import GenerateWalletPage from './pages/generate-wallet';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
          <Route path="/upload" component={UploadPage} exact/>
          <Route path="/generate-wallet" component={GenerateWalletPage} exact/>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
