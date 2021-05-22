import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

class Scale extends React.Component {
  state = {
    weight: 0,
    total: 0
  };

    componentDidMount() {
        this.loadCurrentData();
    }

    loadCurrentData() {
        console.log("loadCurrentData");
        fetch("/current")
            .then((res) => res.json())
            .then((data) => {
            this.setState(
                {
                    'weight': data.currentWeight,
                    'total': data.currentTotal
                }
            );
        });
    }

  weighButtonClicked = () => {
    fetch("/weigh")
    .then((res) => res.json())
    .then((data) => {
        console.log("Weighing complete!");
        this.setState(
          {
            'weight': data.currentWeight,
            'total': data.currentTotal
          });
    });
  };

  resetButtonClicked = () => {
    fetch("/reset")
    .then((res) => res.json())
    .then((data) => {
        console.log("Reset complete!");
        this.setState(
          {
            'weight': data.currentWeight,
            'total': data.currentTotal
          });
    });
  };

  render (){
    return (
      <div>
        <div id="weightDisplay" class="text-center row my-5">
          <Display weight={this.state.weight} total={this.state.total}/>
        </div>
        <div id="weighButtons">
          <Buttons weighButtonClicked={this.weighButtonClicked} resetButtonClicked={this.resetButtonClicked} />
        </div>
      </div>
    );
  }
}

export default Scale;
