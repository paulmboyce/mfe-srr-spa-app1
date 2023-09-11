/* eslint-disable no-console */
import Root from "../root.component"; // Import your main React component
// import ReactDOMServer from "react-dom/server";
export function App(props) {
  return (
    <>
      <h1>Hello, React with SSR!!</h1>
      <p>This is a React component rendered on the server.</p>
      <Root name="SSR rendered Root" />
    </>
  );
}
