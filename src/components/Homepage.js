// import '../App.css';

// const HomePage = () => {
//   return ( 
//     <div>
//       <div className="intro">
//         <div className="intro-title">
//           <h1>Trade with us</h1>
//           <h2>Buy and sell cryptocurrency</h2>
//           <div className="intro-buttons">
//             <button className="get-started">Get Started</button>
//             <button className="browse-coins">Browse Now</button>
//           </div>
//         <div className="intro-image">
//           <img src="https://iili.io/JnDI9Kx.th.png" style={{width: "200px", height: "200px", border: "2px solid #fff", borderRadius: "50px"}}/>
//         </div>
//         </div>
//       </div>
//     </div>
//    );
// }
 
// export default HomePage;

import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="intro">
      <div className="intro-title">
        <h1>Trade with us</h1>
        <h2>Buy and sell cryptocurrency</h2>
        <p>Fast and secure way to buy and<br/> exchange the top crypto coins</p>
        <div className="intro-buttons">
          <button className="get-started">Get Started</button>
          <button className="browse-coins">Browse Now</button>
        </div>
      </div>
      <div className="intro-image">
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029" />
      </div>
    </div>
  );
}

export default HomePage;
