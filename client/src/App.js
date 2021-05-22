import React from "react";
import Scale from "./Scale";
import History from "./History";
import Navigation from "./Navigation";

class App extends React.Component {
  state = {
    currentTab: 0
  };

  switchTab = () => {
    this.setState(
      {
        'currentTab': (this.state.currentTab === 0) ? 1 : 0
      }
    );
  }

  render (){
    return (
      <div>
        <Navigation switchTab={this.switchTab} currentTab={this.state.currentTab} />
        {this.state.currentTab === 0 ?
        <Scale /> : <History />
        }
      </div>
    );
  }
}

export default App;
