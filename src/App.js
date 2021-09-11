import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calon from './pages/Calon';

const TRACKING_ID = "UA-174571616-2"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

library.add(fab)

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/calon1" exact component={() => <Calon />} />
        <Route path="/calon2" exact component={() => <Calon />} />
        <Route path="/calon3" exact component={() => <Calon />} />
        <Route path="/calon4" exact component={() => <Calon />} />
      </Switch>
    </Router>
  );
}

export default App;
