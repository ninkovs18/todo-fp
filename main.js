const createTask = (message, index) => {
  return R.pipe(
    addClass("border"),
    addClass("p-5"),
    addClass("mt-10"),
    attr("data-id", index),
    append(text(message))
  )(elem("div"));
};

const el = createTask("Prvi task", 1);

document.getElementById("message-list").appendChild(el);
