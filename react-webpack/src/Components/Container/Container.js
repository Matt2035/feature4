// import React from "react";
// import HeaderModule from "./Header";
// import { BrowserRouter as Router, Route} from "react-router-dom";

// const ContainerModule = () => {
//   return (
//     <div>
//       This is the container component
//       <hr />
//       <Router>
//         <Route path="/header" component={HeaderModule} exact />
//       </Router>
//     </div>
//   );
// };

// export default ContainerModule;
import React from "react";
import ParentModule from "./Header";
import { BrowserRouter as Router, Route} from "react-router-dom";

const ContainerModule = () => {
  return (
    <div>
      This is the container component
      <hr />
      <Router>
        <Route path="/parent" component={ParentModule} exact />
      </Router>
    </div>
  );
};

export default ContainerModule;