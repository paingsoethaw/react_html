///////////////////////////////////////////////////////////
/////////////// JSX for creating elements /////////////////
///////////////////////////////////////////////////////////

// function Person(props) {
//   return (
//     <div className="person">
//       <h1>{props.name}</h1>
//       <p>Score: {props.score}</p>
//     </div>
//   );
// }

// var app = (
//   <div>
//     <Person name="David" score="12" />
//     <Person name="John" score="15" />
//   </div>
// );

// ReactDOM.render(app, document.querySelector("#app"));


/////////////////////////////////////////////////////////////
/////////////// create elements without JSX /////////////////
/////////////////////////////////////////////////////////////
function Person(props) {
  return React.createElement(
    "div",
    { className: "person" },
    React.createElement("h1", null, props.name),
    React.createElement("p", null, "Score: ", props.score)
  );
}

var app = React.createElement(
  "div",
  null,
  React.createElement(Person, { name: "David", score: "18" }),
  React.createElement(Person, { name: "John", score: "15" })
);

ReactDOM.render(app, document.querySelector("#app"));
