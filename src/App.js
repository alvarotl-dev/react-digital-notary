import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import UploadPage from './pages/upload';
import GenerateWalletPage from './pages/generate-wallet';
import ExploreDocumentsPage from './pages/explore';

export const state = {
  currentAccount: '',
  author: '',
  doc: '',
  ipfsHash: null,
  buffer: '',
  ethAddress: '',
  blockNumber: '',
  transactionHash: '',
  gasUsed: '',
  txReceipt: '',
  hashedData: '',
  decryptedData: '',
  eth_events: [],
  genWallet: '',
  genWalletPKEY: '',
  isSubmitted: false,
  p_key: "this_is_a_private_key",
  pageValue: 1,
  maxPageValue: 1,
  auditAccount: [
    "0xDb1CdE66D7893C0f0B95499E69A35fe61bBc16e0"
  ]
}

 

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
          <Route path="/upload" component={UploadPage} exact/>
          <Route path="/generate-wallet" component={GenerateWalletPage} exact/>
          <Route path="/explore" component={ExploreDocumentsPage} exact/>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
