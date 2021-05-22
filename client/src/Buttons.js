import React from "react";

/*
*   THIS COMPONENT IS USED TO RENDER THE BUTTONS FOR TAKING THE WEIGH AND RESETTING THE SCALE
 */
class Buttons extends React.Component {

  render() {
      return (
    <div class="row">
      <div class="col">
        <div class="row p-4">
          <button class="btn btn-lg btn-success text-center" onClick={this.props.weighButtonClicked}>Punnitse</button>
        </div>
      </div>
      <div class="col">
        <div class="row p-4">
          <button class="btn btn-lg btn-danger text-center" onClick={this.props.resetButtonClicked}>Nollaa</button>
        </div>
      </div>
	</div>
      );
  }
}

export default Buttons;
