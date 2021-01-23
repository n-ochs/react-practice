import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomepageContent from './components/homepageContent';
import Feed from './components/Feed';
import FAQ from './components/FAQ';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <HomepageContent />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
