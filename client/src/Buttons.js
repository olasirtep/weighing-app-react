import React from "react";

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
