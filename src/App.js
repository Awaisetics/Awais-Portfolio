import React from "react";

import {
  Experience,
  Footer,
  Header,
  Skills,
  Testimonial,
  Projects,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Experience />
    <Skills />
    <Projects />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
