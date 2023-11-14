import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./componenets/App";
import About from "./componenets/About";
import Education from "./componenets/Education";
import Contact from "./componenets/Contact";
import Skills from "./componenets/Skills";
import Nav from "./componenets/Nav";

function Router() {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
           
        </Routes>
      </BrowserRouter>
    );
  }
 export default Router;