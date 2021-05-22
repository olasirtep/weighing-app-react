import React from "react";

class Navigation extends React.Component {

  render() {
      return (
        <div class="row">
            <div class="col">
                <div class="row">
                    <button class="btn"><a href="/">Punnitus</a></button>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <button class="btn btn-secondary"><a href="/history">Punnitushistoria</a></button>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Navigation;
