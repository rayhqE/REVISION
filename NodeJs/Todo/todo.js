const fs = require("fs");
const filePath = "./tasks.json";
const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};
const saveTasks = (tasks) => {
  const dataJson = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJson);
};
const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task Added ", task);
};

const listTask = () => {
  const tasks = loadTask();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

const removeTask = (index) => {
  const tasks = loadTask();
  tasks.splice(index - 1, 1);
  saveTasks(tasks);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found");
}
