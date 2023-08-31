const express=require("express")
const { open } = require("sqlite");
const cors = require('cors');
const path=require("path")
const sqlite3 = require("sqlite3");
const app = express();
app.use(cors());
app.use(express.json())

const dbPath = path.join(__dirname, "goodreads.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3004, () => {
      console.log("Server Running at http://localhost:3004/");
    });
  } catch (e) {
    console.log("error")
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.post("/login/", async (request, response) => {
    const {userDetails} = request.body;
    const {username}= userDetails
    const selectUserQuery = `SELECT * FROM user WHERE username = '${username}'`;
    console.log(selectUserQuery);
    const dbUser = await db.get(selectUserQuery);
    if (dbUser === undefined) {
      response.status(400);
      response.send("false");
    }
    else{
        response.send("true");
    }
  });