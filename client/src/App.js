import React from "react";
import Scale from "./Scale";
import History from "./History";

class App extends React.Component {
  state = {
    currentPage: "scale"
  };

  render (){
    return (
      <div>
        {this.state.currentPage == "scale" ?
        <Scale /> : <History />
        }
      </div>
    );
  }
}

export default App;
