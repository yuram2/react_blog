const express = require("express"); //라이브 서버
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("몽고DB랑 연결이 되었습니다."))
    .catch((err) => console.log(err));

    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);

app.listen(5000, () => { //port번호
    console.log("Backend is running ");
});
