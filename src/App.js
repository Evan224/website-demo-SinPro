import "./index.css";
import Header from "./components/Header";
import { HashRouter, Route,Routes } from "react-router-dom";
import routes from "./utils/routes.js";
import "animate.css/animate.min.css";

function App() {
  return (
    
    <HashRouter >
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

    </HashRouter>

    
  );
}

export default App;