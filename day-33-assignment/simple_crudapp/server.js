const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

const PORT = 4000;
const connectionString = process.env.DB_URL;

let db;
let quotesCollection;
MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(
  (client) => {
    console.log("Connected to Database");
    db = client.db("star-wars-quotes");
    quotesCollection = db.collection("quotes");
  }
);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.collection("quotes")
    .find()
    .toArray()
    .then((results) => {
      res.render("index.ejs", { quotes: results });
    })
    .catch((error) => console.error(error));
});
app.post("/quotes", (req, res) => {
  quotesCollection.insertOne(req.body).then((result) => {
    console.log(result);
    res.redirect("/");
  });
});

app.put("/quotes", (req, res) => {
  quotesCollection
    .findOneAndUpdate(
      { name: "Yoda" },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote,
        },
      },
      {
        upsert: true,
      }
    )
    .then((result) => res.json("Success"))
    .catch((error) => console.error(error));
});

app.listen(4000, () => {
  console.log(`Server running on port ${PORT}`);
});
