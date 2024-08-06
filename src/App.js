import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Welcome from "./pages/Welcome"
import Map from "./pages/Map"
import FishSuccessModal from './components/FishSuccessModal';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path = {"/"} element = {<Welcome/>}></Route>
      <Route path = {"/map"} element = {<Map />}></Route>
      <Route path = {"/modal"} element = {<FishSuccessModal />}></Route>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
