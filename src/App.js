import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Continents } from "./pages/Continents";
import { Country } from "./pages/Country";
import { CountryList } from "./pages/CountryList";
import { CurrentPlace } from "./pages/CurrentPlace";

function App() {
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/" element={<Continents />} />{" "}
        <Route path="/:continent" element={<Country />} />
        <Route path="/:continent/:country" element={<CountryList />} />
        <Route
          path="/:continent/:country/:destination"
          element={<CurrentPlace />}
        />
      </Routes>
    </div>
  );
}

export default App;
