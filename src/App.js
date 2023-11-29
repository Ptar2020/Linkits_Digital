// import About from "../src/components/About"
// import Services from "../src/components/Services"
// import Footer from "../src/components/Footer"
// import Navbar from "./Navbar";


// function App() {
//   return (
//     <div className="container">
//       <Navbar/>
//       <About />
//       <hr />
//       <Services />
//       <hr />
//       <Footer />      <br/>

//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './Navbar';
import About from '../src/components/About';
import Services from '../src/components/Services';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="container" style={{ paddingTop: '56px' }}>
      <Navbar />
      <About />
      <hr />
      <Services />
      <hr />
      <Footer />
      <br />
    </div>
  );
}

export default App;
