import DoBakhshi from "./components/doBakhshi";
import Navbar from "./components/navbar";
import Nabejaei from "./components/nabejaei";
import { AppContextProvider } from "./components/context";
import Newton from "./components/newton";
import Watari from "./components/watari";
import { useState } from "react";

function App() {
  const [name, setName] = useState("doBakhshi");

  function handleName(i) {
    setName(i);
  }

  return (
    <AppContextProvider>
      <Navbar name={name} handleName={handleName} />
      {name === "doBakhshi" && <DoBakhshi />}
      {name === "nabejaei" && <Nabejaei />}
      {name === "newton" && <Newton />}
      {name === "watari" && <Watari />}
    </AppContextProvider>
  );
}

export default App;
