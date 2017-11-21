import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

import { MuiThemeProvider } from "material-ui";
import { InternalState } from "./state";
import { ReduxState } from "./redux";
import "./index.css";
import "./App.css";

const store = createStore(reducer);

const Head = () => (
  <header className="App-header">
    <h1 className="App-title">State vs Redux - Validation</h1>
  </header>
);

const Layout = ({ children }) => (
  <div className="App">
    <Head />
    {children}
  </div>
);

const Main = () => (
  <div className="wrapper">
    <InternalState />
    <Provider store={store}>
      <ReduxState />
    </Provider>
  </div>
);

const Bootstrapper = () => (
  <MuiThemeProvider>
    <Layout>
      <Main />
    </Layout>
  </MuiThemeProvider>
);

ReactDOM.render(<Bootstrapper />, document.getElementById("root"));
