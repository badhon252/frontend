import WithCounter from "./WithCounter"

const WithHover = (props) =>{
  const {count, increament} = props;
  return (
    <div>
        <h1 onMouseOver={increament}>Hover {count} times.</h1>
    </div>
  )
}

export default WithCounter(WithHover);