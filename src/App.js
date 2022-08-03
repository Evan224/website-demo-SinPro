import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import routes from "./utils/routes.js";
import "animate.css/animate.min.css";

function App() {
  return (
    
    <BrowserRouter >
    <div className="relative">

      <Header />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.component></route.component>}
              key={route.path}
            >
            </Route>
          );
        })}
      </Routes>
      </div>

    </BrowserRouter>

    
  );
}

export default App;