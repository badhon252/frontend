// window.onload = function () {
//   main();
// };

/* 
(function main() {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerText = "Hello World";
  document.body.appendChild(h1);

  p.innerText = "This is a paragraph";

  div.appendChild(h1);
  div.appendChild(p);

  document.body.appendChild(div);
})();
 */

(function () {
  const App = Container([
    Text("h1", "Hello world"),
    Text("p", "This is a paragraph!"),
    Text("h2", "This is a h2 tag"),
    Text("h3", "This is a h3 tag"),
    Container([Text("h2", "Hello"), Text("h2", "World!")], {
      display: "flex",
      gap: "1rem",
    }),
  ]);
  //   document.getElementById("root").appendChild(App);

  render(App, document.getElementById("root"));
})();

function render(tag, where) {
  where.appendChild(tag);
}
function Container(children, style = {}) {
  const div = document.createElement("div");
  Object.keys(style).map((key) => {
    div.style[key] = style[key];
  });

  children.forEach((ch) => div.appendChild(ch));

  return div;
}

function Text(tag, value) {
  const text = document.createElement(tag);
  text.innerText = value;
  //   if(value === )
  return text;
}
