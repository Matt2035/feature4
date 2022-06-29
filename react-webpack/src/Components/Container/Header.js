// // import statements
// import React from "react";
// import ChildModule from "./Child";
  
// const HeaderModule = ({ title, children }) => {
//     // useEffect(() => {
//     //   document.title = title;
//     // }, [title]);
  
//     return (
//         <div>
//             <header class="header">
//             </header>
  
//             <ChildModule />  
//         </div>
        
//     );
//   }
  
// export default HeaderModule;

import React from "react";
import ParentChildModule from "./Child";

const ParentModule = () => {
  return (
    <div>
      <div>This is the parent component</div>
      <hr />
      <ParentChildModule />
    </div>
  );
};

export default ParentModule;