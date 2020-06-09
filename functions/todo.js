const fs = require("fs");

let todoList = [];

const fetchdb = () => {
  try {
    todoList = require("../db/data.json");
    return todoList;
  } catch (error) {
    todoList = [];
  }
};

const saveDB = () => {
  let data = JSON.stringify(todoList);

  return new Promise((resolve, reject) => {
    fs.writeFile(`./db/data.json`, data, (err) => {
      if (err) reject(err);
      else {
        resolve(`tarea guardada`);
      }
    });
  });
};

const create = (desc) => {
  fetchdb();
  let task = {
    desc,
    done: false,
  };

  todoList.push(task);
  return task;
};

const update = async (desc, done = true) => {
  await fetchdb();
  let index = todoList.findIndex((task) => task.desc === desc);
  if (index >= 0) {
    todoList[index].done = done;
    console.log(`${todoList[index].desc} done`);
    saveDB();
    return true;
  } else {
    return false;
  }
};

const remove = (desc) => {
  fetchdb();
  let newState = todoList.filter((task) => task.desc !== desc);
  let index = todoList.findIndex((task) => task.desc === desc);
  if (newState.length === todoList.length) {
    return false;
  } else {
    const itemDeleted = todoList[index].desc;
    console.log(`${itemDeleted} removed`);
    todoList = newState;
    saveDB();
    return true;
  }
};

module.exports = {
  create,
  saveDB,
  fetchdb,
  update,
  remove,
};
