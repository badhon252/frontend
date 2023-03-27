import WithCounter from "./WithCounter"

function WithHover(props) {
    const {count, increament} = props;
  return (
    <div>
        <h1 onMouseOver={increament}>Click {count} times.</h1>
    </div>
  )
}


export default WithCounter(WithHover);