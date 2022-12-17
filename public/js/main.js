"use strict";

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

var Book = function Book() {
  return React.createElement(
    "article",
    null,
    React.createElement(
      "h1",
      null,
      "Book"
    ),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates minus dolore."
    ),
    React.createElement("hr", null)
  );
};

var number = 5;

var decrement = function decrement() {
  number -= 1;
  render();
  console.log(number);
};
var reset = function reset() {
  number = 0;
  render();
  console.log(number);
};
var increment = function increment() {
  number += 1;
  render();
  console.log(number);
};
function render() {
  var App = function App() {
    var bool = false;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "app " + (bool ? "x" : "y") },
        number
      ),
      React.createElement(
        "button",
        { onClick: decrement },
        "decrement"
      ),
      React.createElement(
        "button",
        { onClick: reset },
        "reset"
      ),
      React.createElement(
        "button",
        { onClick: increment },
        "increment"
      )
    );
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
}
render();

// JSX <= BABEL  >= JS
//SETUP BABEL
