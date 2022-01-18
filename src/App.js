import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [modePurple, setDarkModePurple] = useState("light");
  const [modeBlue, setDarkModeBlue] = useState("light");
  const [modeGreen, setDarkModeGreen] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toogleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "primary");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
 
      showAlert("Light Mode has been enabled", "dark");
    }
  };

  const toogleModePurple = () => {
    if (modePurple === "light") {
      setDarkMode("dark");
      setDarkModePurple("dark");
      document.body.style.backgroundColor = "purple";
      showAlert("Purple Mode has been enabled", "dark");
    } else {
      setDarkModePurple("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "dark");
    }
  };
  const toogleModeBlue = () => {
    if (modeBlue === "light") {
      setDarkMode("dark");
      setDarkModeBlue("dark");
      document.body.style.backgroundColor = "blue";
      showAlert("Blue Mode has been enabled", "primary");
    } else {
      setDarkModeBlue("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "dark");
    }
  };
  const toogleModeGreen = () => {
    if (modeGreen === "light") {
      setDarkMode("dark");
      setDarkModeBlue("dark");
      document.body.style.backgroundColor = "green";
      showAlert("Green Mode has been enabled", "success");
    } else {
      setDarkModeGreen("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "dark");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="ARK PRO CODER"
          aboutText="About Us"
          mode={mode}
          toogleMode={toogleMode}
          toogleModePurple={toogleModePurple}
          toogleModeBlue={toogleModeBlue}
          toogleModeGreen={toogleModeGreen}
        />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <Switch>
        <Route exact path="/">
            <TextForm
              heading="Enter the Text "
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
