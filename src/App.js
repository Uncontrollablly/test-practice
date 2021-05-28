import "@/App.css";
import Hello from "@/components/hello/Hello";
import User from "@/components/user/User";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <User></User>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
