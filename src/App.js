import React from 'react';
import mainPage from "./pages/mainPage.js";
import MainPage from "../pages/mainPage/mainPage";

function App(){
return(
  <div>
    <Router>
       <Routes>
         <Route path="/" elements=element={<MainPage/>}></Route>
       </Routes>
    </Router>
  </div>
);
}
export default App;


