import React from "react";
//import Hello from './components/Hello';
import ButtonCounter from './components/hoc/ButtonCounter';
import HoverCounter from './components/hoc/HoverCounter';
function App(){

    return (
      <div>
          <ButtonCounter /> <br />
          <HoverCounter />
      </div>
    )

}

export default App;