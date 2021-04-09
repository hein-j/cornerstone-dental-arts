import { useState, useEffect } from "react";
import './App.css';
import Navigation from '../Navigation/Navigation';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Home/Home';
import Team from '../Team/Team';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';


function App() {
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(()=> {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [])

  return (
    <BrowserRouter>
      <Navigation width={width} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
      

    </BrowserRouter>
  );
}

export default App;
