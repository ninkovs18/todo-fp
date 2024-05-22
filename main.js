const createTask = (message, index) => {
  return R.pipe(
    addClass("border"),
    addClass("p-5"),
    addClass("mt-10"),
    attr("data-id", index),
    append(text(message))
  )(elem("p")); // prvo sto ce da uradi jeste da kreira paragraf
};

const view = (state) => {
  if (state.length === 0) return elem("div");

  const appendFuncions = state.map((message, index) =>
    append(createTask(message, index))
  );
  return R.pipe(...appendFuncions)(elem("div"));
};

const app = (state, output, dispatch) => {
  R.pipe(clear, append(view(state)))(output);

  const stop = dispatch(() => {
    stop();
    const newText = getElem("message-text").value;
    const newState = [...state, newText];
    getElem("message-text").value = "";
    getElem("message-text").focus();
    app(Object.freeze(newState), output, dispatch);
  });
};

const buttonClick = on("click", getElem("message-button"));

app(
  Object.freeze(["Prvi task", "Drugi task"]),
  getElem("message-list"),
  buttonClick
);
