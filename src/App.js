import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Rewards from "./components/Rewards";
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>
      <Rewards></Rewards>
    </div>
  );
}

export default App;
