import { Component, ParentProps } from "solid-js";
import { useAuthState } from "./context/auth";

const App: Component<ParentProps> = (props) => {
  const authState = useAuthState()!;
  return (
    <>
      {/* <div class="text-white">
        <div>
          Is Authenticated: {`${authState?.isAuthenticated}`}
        </div>
        <div>
          Is Loading: {`${authState?.loading}`}
        </div>
      </div> */}
      <div id="popups" />
      {props.children}
    </>
  );
};

export default App;