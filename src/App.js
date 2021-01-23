import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomepageContent from './components/homepageContent'
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
