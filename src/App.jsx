import "./App.css";
import Contenu from "./Components/Contenu/Contenu";
import NavBar from "./Components/NavBar/NavBar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Contenu />
      </ThemeProvider>
    </>
  );
}

export default App;
