//  list_Todos.js
const Tododb = require("./models/index");

const list_Todo = async () => {
  try {
    await Tododb.Todo.showList();
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  await list_Todo();
})();
