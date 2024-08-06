import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Map from "./pages/Map";
import Details from './pages/Details';
import Home from './components/Home'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path = {"/"} element = {<Welcome />}></Route>
        <Route path = {"/map"} element = {<Map />}></Route> 
        <Route path = {"/home"} element = {<Home />}></Route> 
        <Route path = {"/details/:region"} element = {<Details />}></Route> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
