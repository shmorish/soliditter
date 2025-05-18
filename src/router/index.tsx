import { Route } from "@solidjs/router";
import { lazy } from "solid-js";

import HomeScreen from "../screens/Home";

const LoginScreen = lazy(() => import("../screens/Login"))
const RegisterScreen = lazy(() => import("../screens/Register"))

const AppRoutes = () => {
  return (
    <>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </>
  )
}

export default AppRoutes;