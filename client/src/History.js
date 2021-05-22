import React from "react";

class History extends React.Component {
    state = {
        weights : [],
        loadIndex : 0
    }

    componentDidMount() {
        this.getHistory();
    }

    getHistory () {
        fetch("/history")
        .then((res) => res.json())
        .then((data) => {
            this.setState({'weights' : data.reverse()});
            this.setState({'loadIndex': this.state.loadIndex+1});
        });
    }

    render() {
        return (
            <div class="row my-5 px-5">
                {
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
