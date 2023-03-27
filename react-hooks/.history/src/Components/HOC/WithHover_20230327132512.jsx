import WithCounter from "./WithCounter"

function WithHover(props) {
    const {} = props;
  return (
    <div>
        <button>Click {count} times.</button>
    </div>
  )
}


export default WithCounter(WithHover);