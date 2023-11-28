import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LazyLoadComponent from "../Helpers/commonHelper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/consents"
        Component={LazyLoadComponent("../Pages/Consents")}
      />
      <Route path="/Login" Component={LazyLoadComponent("../Pages/Login")} />
    </>
  )
);

export default router;
