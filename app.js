const argv = require("./config/yargs").argv;
const taskTodo = require("./functions/todo");
const colors = require("colors");
const comando = argv._[0];

switch (comando) {
  case "create":
    let task = taskTodo.create(argv.desc);
    taskTodo.saveDB(task);
    break;
  case "update":
    taskTodo.update(argv.desc, argv.done);
    break;
  case "delete":
    taskTodo.remove(argv.desc);
    break;
  case "list":
    const tasks = taskTodo.fetchdb();
    for (let task of tasks) {
      console.log("====tarea====".blue);
      console.log(task.desc.green);
      console.log("done:", task.done);
      console.log("=============".blue);
    }

    break;
  default:
    console.log("comando no encontrado");
    break;
}
