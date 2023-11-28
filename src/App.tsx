import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./Config/Routes";

import "./Config/i18n/i18n";
import { Provider } from "react-redux";
import store from "./Config/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
