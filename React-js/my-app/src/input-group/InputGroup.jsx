const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
  padding: "10px",
};
function InputGroup(props) {
  return (
    <div style={style}>
      <label
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          margin: "1rem",
        }}
      >
        {" "}
        {props.label}{" "}
      </label>
      <input type={props.type} />
    </div>
  );
}

export default InputGroup;
