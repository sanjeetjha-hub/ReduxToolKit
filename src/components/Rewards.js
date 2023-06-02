import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/rewardReducer";

function Rewards() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.reward.points);
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Rewards Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Rewards;
