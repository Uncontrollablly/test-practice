import "@/App.css";
import Card from "@/components/card/Card";
import Contact from "@/components/contact/Contact";
import Hello from "@/components/hello/Hello";
import Toggle from "@/components/toggle/Toggle";
import User from "@/components/user/User";
import { useCallback } from "react";

function App() {
  const onSelect = useCallback((choice) => {
    console.log("onSelect", choice);
  }, []);

  // const ref = useRef((choice) => {
  //   console.log("onSelect", choice);
  // });

  return (
    <div className="App">
      <Hello></Hello>
      <User></User>
      <Toggle></Toggle>
      <Contact></Contact>
      <Card onSelect={onSelect}></Card>
    </div>
  );
}

export default App;
