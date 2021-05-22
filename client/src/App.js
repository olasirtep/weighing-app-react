
function App() {
  let currentWeight, currentTotal;

  React.useEffect(() => {
    fetch("/current")
      .then((res) => res.json())
      .then((data) => {
        currentWeight = data.currentWeight;
        currentTotal = data.currentTotal;
      });
  }, []);

  return (
    <div>
      <h1 class="display-1"><span id="currentWeight"></span>{currentWeight} kg</h1>
		  <p class="h3">&sum;: <span id="currentTotal"></span>{currentTotal} kg</p>
    </div>
  );
}

export default App;
