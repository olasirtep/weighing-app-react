import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

class App extends React.Component {
  state = {
    weight: 0,
    total: 0
  };

  /*display = <Display />;
  buttons = <Buttons />;*/

  render (){
    return (
      <div>
        <div id="weightDisplay" class="text-center row my-5">
          <Display />
        </div>
        <div id="weighButtons">
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
