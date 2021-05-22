import React from "react";

/*
*   THIS COMPONENT RENDERS THE LIST CONTAINING PREVIOUS WEIGHTS
*/
class History extends React.Component {
    state = {
        weights : [],
        loadIndex : 0
    }

    componentDidMount() {
        this.getHistory();
    }

    // Loads the history from backend
    getHistory () {
        fetch("/history")
        .then((res) => res.json())
        .then((data) => {
            this.setState({'weights' : data.reverse()}); // Reverse the array to get newest data first
            this.setState({'loadIndex': this.state.loadIndex+1});
        });
    }

    // Render the view
    render() {
        return (
            <div class="row my-5 px-5">
                {
                // Iterate through the array of previous weights
                this.state.weights.map(function(weight) {
                    return (
                    <div class="row px-5">
                        <div class="col">
                            {weight.datetime}
                        </div>
                        <div class="col">
                            {weight.weight} kg
                        </div>
                    </div>
                    );
                })
                }
            </div>
        );
    }
}

export default History;
