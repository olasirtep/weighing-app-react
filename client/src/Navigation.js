import React from "react";

class Navigation extends React.Component {

  render() {
      return (
        <div class="row">
            <div class="col">
                <div class="row">
                    <button onClick={this.props.switchTab} class={this.props.currentTab === 0 ? "btn" : "btn btn-secondary"}>Punnitus</button>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <button onClick={this.props.switchTab} class={this.props.currentTab === 1 ? "btn" : "btn btn-secondary"}>Punnitushistoria</button>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Navigation;
