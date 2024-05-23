const createTask = (message, index) => {
  return R.pipe(
    addClass("task-text"),
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
  console.log("render");
  dispatch((e) => {
    const newText = getElem("message-text").value;
    if (newText === "") {
      getElem("message-text").placeholder = "Your message can't be empty !";
      getElem("message-text").focus();
      app(Object.freeze(state), output, dispatch);
      return;
    }
    getElem("message-text").placeholder = "Enter message";
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
