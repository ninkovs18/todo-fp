const elem = (tag) => document.createElement(tag);
const text = (message) => document.createTextNode(message);

const addClass = R.curry((className, element) => {
  element.classList.add(className);
  return element;
});

const append = R.curry((node, element) => {
  element.appendChild(node);
  return element;
});

const attr = R.curry((attrName, attrValue, element) => {
  element.setAttribute(attrName, attrValue);
  return element;
});

const el = R.pipe(
  addClass("border"),
  addClass("p-5"),
  addClass("mt-10"),
  attr("task_id", 1),
  append(text("Novi task"))
)(elem("div"));

document.getElementById("message-list").appendChild(el);
