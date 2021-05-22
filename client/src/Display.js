import React from "react";

/*
*   THIS CLASS IS USED TO RENDER THE ACTUAL WEIGH DISPLAY ON SCALE
*/
class Display extends React.Component {

    render() {
        return (
        <div>
            <h1 class="display-1"><span id="currentWeight"></span>{this.props.weight} kg</h1>
            <p class="h3">&sum;: <span id="currentTotal"></span>{this.props.total} kg</p>
        </div>
        );
    }
}

export default Display;
