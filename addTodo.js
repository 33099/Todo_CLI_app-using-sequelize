// addTodo.js
// eslint-disable-next-line no-undef
var argv = require("minimist")(process.argv.slice(2));
const Tododb = require("./models/index");

const create_Todo = async (params) => {
  try {
    await Tododb.Todo.addTask(params);
  } catch (error) {
    console.error(error);
  }
};

const getJSDate = (days) => {
  if (!Number.isInteger(days)) {
    throw new Error("Need to pass an integer as days");
  }
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  return new Date(today.getTime() + days * oneDay);
};
(async () => {
  const { title, dueInDays } = argv;
  if (!title || dueInDays === undefined) {
    throw new Error(
      'title and dueInDays are required. \nSample command: node addTodo.js --title="Buy milk" --dueInDays=-2 '
    );
  }
  await create_Todo({ title, dueDate: getJSDate(dueInDays), completed: false });
  await Tododb.Todo.showList();
})();
