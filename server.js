const express = require("express");
const app = express();
const cors = require("cors");
const fireAdmin = require("firebase-admin");
const serviceAccount = require("./serviceKey.json");

fireAdmin.initializeApp({
  credential: fireAdmin.credential.cert(serviceAccount),
});


app.use(express.json());
app.use(cors());
app.use(require("./routes/requestsRoute"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})





let db = fireAdmin.firestore();

const PORT = "9000";

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
