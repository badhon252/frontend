import WithCounter from "./WithCounter";

const IncreamentCounter = (props) => {
  const { count, increament } = props;
  return (
    <div>
      <button type="button" onClick={increament}>
        Click {count} times.
      </button>
    </div>
  );
};

export default WithCounter(IncreamentCounter);
