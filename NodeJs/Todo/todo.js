const mongoose = require("mongoose");
// const fs = require("fs");
const { type } = require("os");
const { error } = require("console");
// const filePath = "./tasks.json";

//Connection
mongoose
  .connect(
    "mongodb://root:Rust1234@ac-85mr5f1-shard-00-00.qikfhs5.mongodb.net:27017,ac-85mr5f1-shard-00-01.qikfhs5.mongodb.net:27017,ac-85mr5f1-shard-00-02.qikfhs5.mongodb.net:27017/todo?ssl=true&replicaSet=atlas-lnwgrs-shard-0&authSource=admin&appName=Cluster0",
  )
  // ("mongodb://127.0.0.1:27017/my-todo-list")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("Mongo Error", error));

//Schema
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    unique: true,
  },
});
//Model
const Task = mongoose.model("task", taskSchema);

// const loadTask = () => {
//   try {
//     const dataBuffer = fs.readFileSync(filePath);
//     const dataJson = dataBuffer.toString();
//     return JSON.parse(dataJson);
//   } catch (error) {
//     return [];
//   }
// };

// const saveTasks = (tasks) => {
//   const dataJson = JSON.stringify(tasks);
//   fs.writeFileSync(filePath, dataJson);
// };

const addTask = async (task) => {
  // const tasks = loadTask();
  await Task.create({ taskName: task });
  // tasks.push({ task });
  // saveTasks(tasks);
  console.log("Task Added ", task);
};

const listTask = async () => {
  // const tasks = loadTask();
  // tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
  const alltasks = await Task.find({});
  alltasks.forEach((task) => console.log(task.taskName));
};

const removeTask = async (task) => {
  // const tasks = await Task.find({});
  await Task.deleteOne({ taskName: task });
  console.log("task removed");

  // saveTasks(tasks);
};

const command = process.argv[2];
const argument = process.argv[3];

(async () => {
  if (command === "add") {
    await addTask(argument);
  } else if (command === "list") {
    await listTask();
  } else if (command === "remove") {
    await removeTask(argument);
  } else {
    console.log("Command not found");
  }

  mongoose.connection.close();
})();
