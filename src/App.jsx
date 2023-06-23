import { Fragment } from "react";
import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
};

export default App;
