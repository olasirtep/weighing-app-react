import React from "react";
import Scale from "./Scale";
import History from "./History";
import Navigation from "./Navigation";

/*
*   PARENT COMPONENT OF THE CLASS
*/
class App extends React.Component {
  state = {
    currentTab: 0
  };

  // Use to switch between tabs, state change causes re-render
  switchTab = () => {
    this.setState(
      {
        'currentTab': (this.state.currentTab === 0) ? 1 : 0
      }
    );
  }

  // Render the view
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
