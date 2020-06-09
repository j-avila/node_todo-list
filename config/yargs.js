const createOpt = {
  desc: {
    demand: true,
    alias: "d",
  },
};
const updateOpt = {
  desc: {
    demand: true,
    alias: "d",
  },
  done: {
    alias: "s",
    default: true,
  },
};
const deleteOpt = {
  desc: {
    demand: true,
    alias: "e",
  },
};

const argv = require("yargs")
  .command("create", "crea una nueva tarea por hacer", createOpt)
  .command("update", "actualiza una tarea creada", updateOpt)
  .command("delete", "elimina una tarea creada", deleteOpt)
  .help().argv;

module.exports = {
  argv,
};
