import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
