import React from "react";
import Scale from "./Scale";
import History from "./History";
import Navigation from "./Navigation";

class App extends React.Component {
  state = {
    currentPage: "scale"
  };

  render (){
    return (
      <div>
        <Navigation />
        {this.state.currentPage == "scale" ?
        <Scale /> : <History />
        }
      </div>
    );
  }
}

export default App;
