import React from "react";

function Display (props) {
    const [weight, setWeight] = React.useState(null);
    const [total, setTotal] = React.useState(null);

    React.useEffect(() => {
      fetch("/current")
        .then((res) => res.json())
        .then((data) => {
          setWeight(data.currentWeight);
          setTotal(data.currentTotal);
        });
    }, []);

    return (
      <div>
        <h1 class="display-1"><span id="currentWeight"></span>{!props.weight ? weight : props.weight} kg</h1>
        <p class="h3">&sum;: <span id="currentTotal"></span>{!props.total ? total : props.total} kg</p>
      </div>
    );
}

export default Display;
