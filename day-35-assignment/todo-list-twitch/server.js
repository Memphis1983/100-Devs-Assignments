const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const PORT = 3000;
require("dotenv").config();

// * Setting up Database
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "todo";

// * Connecting database
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Hey, connected to ${dbName} database`);
    db = client.db(dbName);
  })
  .catch((err) => {
    console.log(err);
  });

// * Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//*Routes
app.get("/", async (req, res) => {
  const todoItems = await db.collection("todos").find().toArray();
  const itemsLeft = await db
    .collection("todos")
    .countDocuments({ completed: false });
  res.render("index.ejs", { zebra: todoItems, left: itemsLeft });
});

app.post("/createTodo", (req, res) => {
  db.collection("todos")
    .insertOne({
      todo: req.body.todoItem,
      completed: false,
    })
    .then((result) => {
      console.log("Todo has been added");
      res.redirect("/");
    });
});

app.put("/markComplete", (req, res) => {
  db.collection("todos")
    .updateOne(
      { todo: req.body.rainbowUnicorn },
      {
        $set: {
          completed: true,
        },
      }
    )
    .then((result) => {
      console.log("Marked Complete");
      res.json("Marked Complete");
    });
});

app.put("/undo", (req, res) => {
  db.collection("todos")
    .updateOne(
      { todo: req.body.rainbowUnicorn },
      {
        $set: {
          completed: false,
        },
      }
    )
    .then((result) => {
      console.log("Marked Complete");
      res.json("Marked Complete");
    });
});

app.delete("/deleteTodo", (req, res) => {
  console.log(req.body.rainbowUnicorn);
  db.collection("todos")
    .deleteOne({ todo: req.body.rainbowUnicorn })
    .then((result) => {
      console.log("Deleted todo");
      res.json("Deleted It");
    })
    .catch((err) => console.log(err));
});

//* Server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
