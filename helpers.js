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
