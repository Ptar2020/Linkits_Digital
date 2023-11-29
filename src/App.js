import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Footer from "../src/components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" style={{ paddingTop: "56px" }}>
      <Navbar />
      <About />
      <Services />
      <hr />
      <Footer />
      <div className={`up-button ${scrolled ? "show" : ""}`} onClick={goTop}>
        <FaArrowUp />
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Navbar from "../src/components/Navbar";
// import About from "../src/components/About";
// import Services from "../src/components/Services";
// import Footer from "../src/components/Footer";
// import { FaArrowUp } from "react-icons/fa";

// function App() {
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   const goTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       // Cleanup the event listener on component unmount
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <Routes>
//         <Route element={<Navbar />}>
//           <Route index element={<About />} />
//           <Route path={"/services" } element={<Services />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
