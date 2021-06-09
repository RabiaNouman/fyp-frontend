import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Donate from './Components/Donor/Donate';
import Dashboard from "./Components/Donor/Dashboard";
import Register from './Components/Register';
import RequestMedicine from './Components/Needy Person/RequestMedicine';
import MedicineTable from './Components/MedicineTable'

const App=()=> {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/donate" component={Donate}></Route>
          <Route path="/donar-dashboard" component={Dashboard}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/request-form" component={RequestMedicine}></Route>
          <Route path="/med-tbl" component={MedicineTable}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
