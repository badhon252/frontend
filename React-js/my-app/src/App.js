import "./App.css";
import InputGroup from "./input-group/InputGroup";
import Button from "./input-group/Button";

function App() {
  return (
    <div className="App">
      <h1> My First React App </h1>

      <InputGroup type="text" label="What is your name? : " />
      <InputGroup type="email" label="Your email address here : " />
      <InputGroup type="password" label="Your password here : " />

      <Button type="submit" label="Submit" variant="success" size="small" />
      <Button type="reset" label="Reset" variant="warning" size="medium" />
      <Button type="button" label="Cancle" variant="info" size="large" />
    </div>
  );
}

export default App;
