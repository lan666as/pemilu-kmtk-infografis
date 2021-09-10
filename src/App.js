import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import GlobalStyle from "./globalStyle";
import ComingSoon from "./pages/ComingSoon";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calon from "./pages/Calon";
import Informasi from "./pages/Informasi";
import TataCara from "./pages/TataCara";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/calon" exact component={() => <Calon />} />
        <Route path="/informasi" exact component={() => <Informasi />} />
        <Route path="/tatacara" exact component={() => <TataCara />} />
      </Switch>
    </Router>
    // <GlobalStyle />
    // <ComingSoon />
  );
}

export default App;
