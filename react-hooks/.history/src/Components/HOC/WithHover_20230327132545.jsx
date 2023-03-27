import WithCounter from "./WithCounter"

function WithHover(props) {
    const {count, increament} = props;
  return (
    <div>
        <button>Click {count} times.</button>
    </div>
  )
}


export default WithCounter(WithHover);