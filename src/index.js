// const message = "Hello Ahmed"; string
// const number = 5; number
// string methods and props
// const obj = {
//   name: "ahmed",
//   age: 25,
//   getData() {
//     return `my name is ${this.name}, age: ${this.age}`;
//   },
// }; object
// const arr = [1, 2, 3, 4, 5, 6]; array
// const connected = false; bool

// const sayHello = (name) => {
//   return `Hello, ${name}`;
// }; function

// const styles = {
//   backgroundColor: "red",
//   color: "white",
//   fontFamily: "monospace",
// }; styles

const Book = () => {
  return (
    <article>
      <h1>Book</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        voluptates minus dolore.
      </p>
      <hr />
    </article>
  );
};

let number = 5;

const decrement = () => {
  number -= 1;
  render();
  console.log(number);
};
const reset = () => {
  number = 0;
  render();
  console.log(number);
};
const increment = () => {
  number += 1;
  render();
  console.log(number);
};
function render() {
  const App = () => {
    const bool = false;
    return (
      <div>
        <h1 className={`app ${bool ? "x" : "y"}`}>{number}</h1>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>increment</button>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
}
render();

// JSX <= BABEL  >= JS
//SETUP BABEL
