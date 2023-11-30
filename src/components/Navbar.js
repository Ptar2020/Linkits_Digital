// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import { Typography } from "@mui/material";

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolling(true);
//     } else {
//       setScrolling(false);
//     }
//   };

//   function setDocTitle(title) {
//     document.title = title;
//   }

//   const goTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Make sure to clean up the event listener on component unmount

//   const navbarClass = scrolling
//     ? "navbar navbar-expand-lg navbar-grey fixed-top solid-bg"
//     : "navbar navbar-expand-lg navbar-grey fixed-top";

//   return (
//     <div>
//       <nav className={"navbar navbar-expand-lg navbar-grey fixed-top solid-bg"}>
//         <Link
//           onClick={() => {
//             goTop();
//             setDocTitle("Home");
//           }}
//           className="navbar-brand text-white"
//         >
//           LINKITS DIGITAL
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item ">
//               {" "}
//               <ScrollLink
//                 onClick={() => setDocTitle("About")}
//                 to="about"
//                 smooth={true}
//                 duration={300}
//                 offset={-30}
//                 className="nav-link text-white"
//               >
//                 <Typography variant="small" component="div">
//                   <Link className="link text-white" id="no_decoration">
//                     About
//                   </Link>
//                 </Typography>
//               </ScrollLink>
//             </li>
//             <li className="nav-item">
//               <ScrollLink
//                 onClick={() => setDocTitle("Services")}
//                 to="services"
//                 smooth={true}
//                 duration={300}
//                 offset={-30}
//                 className="nav-link"
//               >
//                 <Typography variant="small" component="div">
//                   <Link className="link text-white" id="no_decoration">
//                     Services
//                   </Link>
//                 </Typography>
//               </ScrollLink>
//             </li>
//             <li>
//               {" "}
//               <ScrollLink
//                 onClick={() => setDocTitle("Photos")}
//                 to="photos"
//                 smooth={true}
//                 duration={300}
//                 offset={-30}
//                 className="nav-link"
//               >
//                 <Typography variant="small" component="div">
//                   <Link className="link text-white" id="no_decoration">
//                     Samples
//                   </Link>
//                 </Typography>
//               </ScrollLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Typography } from "@mui/material";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  function setDocTitle(title) {
    document.title = title;
  }

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Make sure to clean up the event listener on component unmount

  const navbarClass = scrolling
    ? "navbar navbar-expand-lg navbar-light bg-light fixed-top"
    : "navbar navbar-expand-lg navbar-light fixed-top";

  return (
    <div>
      <nav className={navbarClass}>
        <div className="container-fluid">
          <Link
            onClick={() => {
              goTop();
              setDocTitle("Home");
            }}
            className="navbar-brand text-white"
          >
            LINKITS DIGITAL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <ScrollLink
                  onClick={() => setDocTitle("About")}
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-30}
                  className="nav-link text-white"
                >
                  <Typography variant="small" component="div">
                    <Link className="link text-white" id="no_decoration">
                      About
                    </Link>
                  </Typography>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  onClick={() => setDocTitle("Services")}
                  to="services"
                  smooth={true}
                  duration={300}
                  offset={-30}
                  className="nav-link"
                >
                  <Typography variant="small" component="div">
                    <Link className="link text-white" id="no_decoration">
                      Services
                    </Link>
                  </Typography>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  onClick={() => setDocTitle("Photos")}
                  to="photos"
                  smooth={true}
                  duration={300}
                  offset={-30}
                  className="nav-link"
                >
                  <Typography variant="small" component="div">
                    <Link className="link text-white" id="no_decoration">
                      Samples
                    </Link>
                  </Typography>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
