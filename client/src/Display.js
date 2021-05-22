import React from "react";

function Display () {
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
        <h1 class="display-1"><span id="currentWeight"></span>{!weight ? "-" : weight} kg</h1>
        <p class="h3">&sum;: <span id="currentTotal"></span>{!total ? "-" : total} kg</p>
      </div>
    );
}

export default Display;
