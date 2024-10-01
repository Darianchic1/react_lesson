import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Values from "./components/Values/Values";
import Projects from "./components/Projects/Projects";
import Form_page from "./components/Form_page/Form_page";

import './assets/styles/App.css'

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Values/>
      <Projects/>
      <Form_page/>
    </>
  );
}

export default App;
