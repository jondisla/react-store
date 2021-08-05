/** @format */
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductFooter from "./components/ProductFooter/ProductFooter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
        </Switch>
      </Router>
      <Hero />
      <ProductFooter />
    </div>
  );
}

export default App;
