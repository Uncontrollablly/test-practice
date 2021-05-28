import "@/App.css";
import Hello from "@/components/hello/Hello";
import User from "@/components/user/User";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <User></User>
      <Toggle></Toggle>
      <Contact></Contact>
    </div>
  );
}

export default App;
