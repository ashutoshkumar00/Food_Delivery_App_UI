import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from './Components/Cart/Cart'
import AddMeal from './Components/Meals/AddMeal'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addmeal" element={<AddMeal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
