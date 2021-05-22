import React from "react";

class Buttons extends React.Component {

  weighButtonClicked = () => {
      fetch("/weigh")
      .then((res) => {
          console.log("Weighing complete!");
      });
  };

  resetButtonClicked = () => {
      fetch("/reset")
      .then((res) => {
          console.log("Reset complete!");
      });
  };

  render() {
      return (
    <div class="row">
      <div class="col">
        <div class="row p-4">
          <button class="btn btn-lg btn-success text-center" onClick={this.weighButtonClicked}>Punnitse</button>
        </div>
      </div>
      <div class="col">
        <div class="row p-4">
          <button class="btn btn-lg btn-danger text-center" onClick={this.resetButtonClicked}>Nollaa</button>
        </div>
      </div>
	</div>
      );
  }
}

export default Buttons;
