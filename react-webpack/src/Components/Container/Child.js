
  
//   // import child component
//   // import getCryptos from "./cryptos.js";
//   import React from "react";
  
// const ChildModule = () => {
//     // const [cryptos, setCryptos] = useState([]);
  
//     // // use effect to get json data
//     // useEffect(() => {
//     //   console.log("render");
//     //   getCryptos().then((data) => {
//     //     setCryptos(data);
//     //   });
//     // }, []);
  
//     // return html elements with data
//     return (
//     <div class="cryptos">
//         <ul class="crypto-list">
//           Cryptos Go Here
//         </ul>
//       </div>
//     );
//   }
  
//   export default ChildModule;

import React from "react";

const ParentChildModule = () => {
  return <div>This is the child component</div>;
};

export default ParentChildModule;
