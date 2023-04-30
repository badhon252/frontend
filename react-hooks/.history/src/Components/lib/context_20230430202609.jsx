class Context {
  constructor(value) {
    this.value = value;
  }

  //Provider
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  //Consumer
  Consumer = ({ children }) => children(this.value);
}
