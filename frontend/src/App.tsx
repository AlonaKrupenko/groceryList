import Header from "./components/Header";
import Home from "./routes/Home";
import GroceryList from "./routes/GroceryList";
import RecipesList from "./routes/RecipesList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocery" element={<GroceryList />} />
        <Route path="/recipe" element={<RecipesList />} />
      </Routes>
    </div>
  );
}

export default App;
