const path = require("path");
const express = require("express");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const reqRouter = require("./routes/reqRouter");
const rootDir = require("./utils/pathUtils");
const { nextTick } = require("process");

const app = express();

app.use(express.urlencoded());
app.use(reqRouter);
app.use(userRouter);
app.use(adminRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on address: http://localhost:${PORT}`);
});
