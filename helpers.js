const elem = (tag) => document.createElement(tag);
const text = (message) => document.createTextNode(message);
const getElem = (id) => document.getElementById(id);

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

const on = R.curry((event, element, fn) => {
  element.addEventListener(event, fn, { once: true });
});

const clear = R.curry((element) => {
  element.innerHTML = "";
  return element;
});
