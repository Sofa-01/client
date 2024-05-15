import React from 'react';
import mainPage from "./pages/mainPage.js";

function App(){
return(
  <div>
    <Router>
       <Routes>
         <Route path="/" elements=element={<mainPage/>}></Route>
       </Routes>
    </Router>
  </div>
);
}


